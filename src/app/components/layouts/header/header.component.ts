import { Component, OnInit, ViewChild } from '@angular/core';
import { Home } from 'src/app/models/home';
import {MatDialog} from '@angular/material/dialog';
import { CommondailogComponent } from 'src/app/shared/commondailog/commondailog.component';
import * as _ from 'lodash'
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from 'src/app/service/http.service';
import { login } from 'src/app/service/api_end_point';
import { environment } from 'src/environments/environment';
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
  public joinNowForms:any = {
    title : 'joinNow',
    formField :  [
      { type: 'text', name: 'name', label: 'Name', required: true,columnSize:6 ,fieldType:'text'},
      { type: 'email', name: 'email', label: 'Email', required: true,columnSize:6 ,fieldType:'email'},
      { type: 'select', name: 'gender', label: 'Gender', options: ['Male', 'Female'], required: true,columnSize:2 ,fieldType:'select'},
      { type: 'number', name: 'mobile', label: 'Mobile Number', required: true,columnSize:4 ,fieldType:'number'},
      { type: 'select', name: 'type', label: 'I`m a', options: ['Other', 'other-2'], required: true,columnSize:6 ,fieldType:'select'},
      { type: 'password', name: 'password', label: 'Password', required: true,columnSize:6 ,fieldType:'password'},
      { type: 'password', name: 'confirmPassword', label: 'Confirm Password', required: true,columnSize:6 ,fieldType:'password'},
    ]
  };
  public loginForms:any = {
    title : "login",
    formField :  [
      { type: 'email', name: 'email', label: 'Email', required: true,columnSize:12 ,fieldType:'email'},
      { type: 'password', name: 'password', label: 'Password', required: true,columnSize:12,fieldType:'password' },
      { type: 'text', name: 'captcha', label: 'Enter Captcha', required: true,columnSize:6 ,fieldType:'text'},
      { type: '', name: 'icon', label: 'Refresh',columnSize:2 ,fieldType:'icon'},
      { type: '', name: 'captchaImage', label: 'Captcha',columnSize:4 ,fieldType:'image'},
    ]
  };

  constructor(public dialog: MatDialog,public translateService:TranslateService, private cookieService : CookieService,private httpService:HttpService) {}

  ngOnInit(): void {
  }
  openDialog(label:string) {
    const dialogRef = this.dialog.open(CommondailogComponent,{
      maxWidth:'600px',
      maxHeight:'auto',
      backdropClass: 'blur-background',
      panelClass: 'hide-background', 
      data: label === 'login' ? this.loginForms : this.joinNowForms
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getFormValue()
    });
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
        console.log("form subscribe",response)
        let {captcha,email,captcha_id,password} = response
        console.log("desturing",captcha,captcha_id,email,password)
        let encryptedPassword = this.httpService.getSecretKey(environment.secretKey,password);
        let randomKey = _.random.toString();
        let twoTimesPasswordEncrypted = this.httpService.getSecretKey(randomKey,encryptedPassword)
        console.log("encryptedPassword",twoTimesPasswordEncrypted)
        let payload = {
          captchaText : captcha,
          captcha_id,
          password,
          random : randomKey,
          username:email,
        }
        this.userLogin(payload)
      },
      error : (error)=>{
        console.log("form subscribe error",error)
      }
    })
  }
  userLogin(payload:any){
    // this.httpService.allPostMethod(login.AUTH_LOGIN,payload).subscribe({
    //   next : (response)=>{
    //     console.log("login success",response)
    //   },
    //   error : (error)=>{
    //     console.log("login error",error)
    //   }
    // })
    this.httpService.allPostMethod(login.AUTH_LOGIN,payload).subscribe((res:any)=>{
      console.log("login",res)
    })
  }
}
