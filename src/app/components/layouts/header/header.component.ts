import { Component, OnInit, ViewChild } from '@angular/core';
import { Home } from 'src/app/models/home';
import {MatDialog} from '@angular/material/dialog';
import { CommondailogComponent } from 'src/app/shared/commondailog/commondailog.component';
import * as _ from 'lodash'
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
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
      label:'home', module:'',isActive:true,routeUrl:'home',permission:true,labelTr : "home"
    },
    {
      label:'dashboard', module:'',isActive:false,routeUrl:'dashboard',permission:true,labelTr : "dashboard"
    },
    {
      label:'resources', module:'',isActive:false,routeUrl:'resources',permission:true,labelTr : "resources"
    },
    {
      label:'impactStory', module:'',isActive:false,routeUrl:'impact-stories',permission:true,labelTr : "impactStory"
    },
    {
      label:'aboutUs', module:'',isActive:false,routeUrl:'about-us',permission:true,labelTr : "aboutUs"
    },
    {
      label:'ourPartners', module:'',isActive:false,routeUrl:'our-partners',permission:true,labelTr : "ourPartners"
    },
    {
      label:'joinNow', module:'',isActive:false,routeUrl:'join-now',permission:true,labelTr : "joinNow"
    },
    {
      label:'login', module:'',isActive:false,routeUrl:'login',permission:true,labelTr : "login"
    }
  ]
  public joinNowForms:any = [
    { type: 'text', name: 'name', label: 'Name', required: true,columnSize:6 },
    { type: 'email', name: 'email', label: 'Email', required: true,columnSize:6 },
    { type: 'select', name: 'gender', label: 'Gender', options: ['Male', 'Female'], required: true,columnSize:2 },
    { type: 'number', name: 'mobile', label: 'Mobile Number', required: true,columnSize:4 },
    { type: 'select', name: 'type', label: 'I`m a', options: ['Other', 'other-2'], required: true,columnSize:6 },
    { type: 'password', name: 'password', label: 'Password', required: true,columnSize:6 },
    { type: 'password', name: 'confirmPassword', label: 'Confirm Password', required: true,columnSize:6 },
  ];

  constructor(public dialog: MatDialog,public translateService:TranslateService, private cookieService : CookieService) {}

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CommondailogComponent,{
      maxWidth:'970px',
      maxHeight:'auto',
      backdropClass: 'blur-background',
      panelClass: 'hide-background', 
      data:this.joinNowForms
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
}
