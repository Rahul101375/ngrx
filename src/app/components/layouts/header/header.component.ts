import { Component, OnInit, ViewChild } from '@angular/core';
import { Home } from 'src/app/models/home';
import {MatDialog} from '@angular/material/dialog';
import { CommondailogComponent } from 'src/app/shared/commondailog/commondailog.component';
import * as _ from 'lodash'
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from 'src/app/service/http.service';
import { authentication, ipsa, login, register } from 'src/app/service/api_end_point';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public language :any[] = [
    {label:"english",value:"en",flag:"../../../../assets/flags/en.jpg",isSelect:true},
    {label:"france",value:"fr", flag:"../../../../assets/flags/fr.png",isSelect:false},
    {label:"korea",value:"kr", flag:"../../../../assets/flags/kr.png",isSelect:false},
  ];
  publicHeader : any = [
    {
      label:'home', module:'',isActive:true,routeUrl:'home',permission:true
    },
    {
      label:'dashboard', module:'',isActive:false,routeUrl:'dashboard',permission:true
    },
    {
      label:'resources', module:'',isActive:false,routeUrl:'resources',permission:true
    },
    {
      label:'impactStory', module:'',isActive:false,routeUrl:'impact-stories',permission:true
    },
    {
      label:'aboutUs', module:'',isActive:false,routeUrl:'about-us',permission:true
    },
    {
      label:'ourPartners', module:'',isActive:false,routeUrl:'our-partners',permission:true
    },
    {
      label:'joinNow', module:'',isActive:false,routeUrl:'join-now',permission:true
    },
    {
      label:'login', module:'',isActive:false,routeUrl:'login',permission:true
    }
  ]
  countryList = [
    {value : '+84',label:'vietnam'},
    {value : '+251',label:'ethiopia'},
    {value : '+254',label:'Kenya'},
  ]
  public joinNowForms:any = {
    title : 'joinNow',
    isButtonStyle : true,
    formField :  [
      { type: 'text', name: 'name', label: 'Name', required: true,columnSize:6 ,fieldType:'text'},
      { type: 'email', name: 'email', label: 'Email', required: true,columnSize:6 ,fieldType:'email'},
      { type: 'select', name: 'country_id', label: 'Select Country Code', options: this.countryList, required: true,columnSize:4 ,fieldType:'select'},
      { type: 'number', name: 'mobile', label: 'Mobile Number', required: true,columnSize:8 ,fieldType:'number'},
      { type: 'password', name: 'password', label: 'Password', required: true,columnSize:6 ,fieldType:'password'},
      { type: 'password', name: 'confirmPassword', label: 'Confirm Password', required: true,columnSize:6 ,fieldType:'password'},
    ]
  };
  public loginForms:any = {
    title : "login",
    isButtonStyle : true,
    formField :  [
      { type: 'email', name: 'email', label: 'Email', required: true,columnSize:12 ,fieldType:'email'},
      { type: 'password', name: 'password', label: 'Password', required: true,columnSize:12,fieldType:'password' },
      { type: 'text', name: 'captcha', label: 'Enter Captcha', required: true,columnSize:6 ,fieldType:'text'},
      { type: '', name: 'icon', label: 'Refresh',columnSize:2 ,fieldType:'icon'},
      { type: '', name: 'captchaImage', label: 'Captcha',columnSize:4 ,fieldType:'image'},
      { type: '', name: 'forgetPassword', label: 'Forget Password',columnSize:4 ,fieldType:'forgetPassword'},
    ]
  };
  login: string = '';
  otpForm = {
    title : 'otpVerification',
    message : 'yourOtpHasBeenSentSuccessfully !',
    email:'',
    formField :  [
      { type: 'text', name: 'otp1', required: true,columnSize:2 ,fieldType:'text'},
      { type: 'text', name: 'otp2', required: true,columnSize:2 ,fieldType:'text'},
      { type: 'text', name: 'otp3', required: true,columnSize:2 ,fieldType:'text'},
      { type: 'text', name: 'otp4', required: true,columnSize:2 ,fieldType:'text'},
      { type: 'text', name: 'otp5', required: true,columnSize:2 ,fieldType:'text'},
      { type: 'text', name: 'otp6', required: true,columnSize:2 ,fieldType:'text'}
    ]
  }
  email: string = '';
  ipsaEndPoint: string = 'create';
  password: string = '';

  constructor(public dialog: MatDialog,public translateService:TranslateService, private cookieService : CookieService,private httpService:HttpService) {}

  ngOnInit(): void {
  }
  openDialog(label:string) {
    this.login = label;
    console.log ("label",this.login,label)
    const dialogRef = this.dialog.open(CommondailogComponent,{
      maxWidth:'600px',
      maxHeight:'auto',
      backdropClass: 'blur-background',
      panelClass: 'hide-background', 
      data: this.dialogContent(label)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result", JSON.stringify(result),result.event,['login','joinNow'].includes(result.event));
      // if(['login','joinNow'].includes(result.type)){
      //   this.getFormValue()
      // }
      // if(result.type === 'verify'){
      //   after verifiaction what ever you do
      // }
      if(['login','joinNow'].includes(label) && !['login','joinNow'].includes(result.event)){
          this.getFormValue()
        }
        else if(['login','joinNow'].includes(result.event)){
          console.log("dialog")
          this.openDialog(result.event)
        }
        // else{

        // }
    });
  }
  dialogContent(label: string): any {
    switch(label){
      case 'login' : 
       return this.loginForms;
      case 'joinNow' : 
        return this.joinNowForms;
      case 'verify' : 
        return this.otpForm;
    }
  }
  setLanguage(event:any){
    this.cookieService.delete('lang');
    this.cookieService.set('lang',event.value)
    this.translateService.use(this.cookieService.get('lang') || "en")
    this.language = _.map(this.language,(el)=>{
      el.isSelect = el.value === event.value;
      return el;
    })
    console.log("languages",this.language)
  }
  getFormValue(){
    this.httpService.formData$.subscribe({
      next:(response)=>{
        if(this.login === 'login'){
          this.loginInformation(response)
        }
        if(this.login === 'joinNow'){
          this.signUpInformation(response)
        }
      },
      error : (error)=>{
        console.log("form subscribe error",error)
      }
    })
  }
  loginInformation(response:any){
    if(response){
      let {captcha,email,captcha_id,password} = response
        console.log("desiring",captcha,captcha_id,email,password)
        let encryptedPassword = this.httpService.getSecretKey(environment.secretKey,password);
        let randomKey = _.random(10, 20,true);
        let randomKeyString = randomKey.toString();
        let caliperText = this.httpService.getSecretKey(randomKeyString,encryptedPassword)
        let payload = {
          captchaText : captcha,
          captcha_id,
          password:caliperText,
          username:email,
          random:randomKeyString
        }
        let response$=this.httpService.allPostMethod(login.AUTH_LOGIN ,payload);
        console.log("login observables",response$)
        this.subscribeObservable(response$)
    }
  }
  signUpInformation(response:any){
    if(response){
      let {country_code,email,mobile,name,password} = response;
    this.email = email;
    this.password = password;
    let encryptedPassword = this.httpService.getSecretKey(environment.secretKey,password);
    console.log("encryptedPassword join Now",encryptedPassword)
        let randomKey = _.random(0, 5,true);
        console.log("random key",randomKey)
        let payload = {country_code,email,mobile,name,password:encryptedPassword}
        let response$=this.httpService.allPostMethod(register.USER_REGISTER ,payload);
        this.subscribeObservable(response$,'')
    }

  }
  userLogin(payload:any){
    this.httpService.allPostMethod(login.AUTH_LOGIN,payload).subscribe((res:any)=>{
      console.log("login",res)
    })
  }
  subscribeObservable(res:Observable<any>,type:string = ""){
    res.subscribe({
      next : (response)=>{
        this.httpService.updateSnackBarData(response.message);
        if(this.login === 'joinNow'){
          this.openDialog('verify');
          this.otpForm.email = this.email
          this.ipsaGetMethod();
          this.ipsaPostMethod()
        }
        if(this.login === 'login'){
          let {country_id,email,factory_id,id,industrialpark_id,name,role_id,userlevel_id} = response.data;
          let payload = {country_id,email,factory_id,id,industrialpark_id,name,role_id,userlevel_id}
          if(response.token){
            sessionStorage.setItem('token',response.token);
          }
          if(response.data){
            sessionStorage.setItem('userInfo',JSON.stringify(response.data))
          }
          
          console.log("login-session",payload);
          this.userPermissionJson(role_id)
        }
        if(type === 'viewPermission'){
          console.log(type,response);
          if(response.data){
            sessionStorage.setItem('userPermissionInfo',JSON.stringify(response.data))
          }
        }
      },
      error : (error)=>{
        console.log("join error",error);
        this.httpService.updateSnackBarData(error.error.message)
        
      }
    })
  }
  userPermissionJson(role_id: string) {
    if(role_id){
       let authEndPoint:string = `view?role_id=${role_id}`
       let viewPermission$ = this.httpService.getMethod(authentication.AUTHENTICATION + authEndPoint)
       this.subscribeObservable(viewPermission$,'viewPermission') 
      }
    }
  ipsaGetMethod(){
    let payload = {
      endpoint:`/user/submission?data.e/user/submission?data.email=${this.email}`,
      method : 'GET',
      requestBody : {},
      headers : {
        'Content-type' : 'application/json'
      }
    }
    this.httpService.getMethod(ipsa.IPSA + this.ipsaEndPoint ,payload).subscribe({
      next : (ipsaRes)=>{
        console.log("get ipsa resp",ipsaRes)
      },
      error : (error)=>{
        console.log("get ipsa error",error)
      }
    })

  }
  ipsaPostMethod(){
    let payload = {
      endpoint:`/admin/submission?query=true`,
      method : 'POST',
      requestBody : {
        data : {
          email : this.email,
          password : this.password
        }
      },
      headers : {
        'Content-type' : 'application/json'
      }
    }
    this.httpService.allPostMethod(ipsa.IPSA + this.ipsaEndPoint ,payload).subscribe({
      next : (ipsaRes)=>{
        console.log("post ipsa resp",ipsaRes)
      },
      error : (error)=>{
        console.log("post ipsa error",error)
      }
    })
  }
}
