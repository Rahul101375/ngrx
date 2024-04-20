import { Component, OnInit, ViewChild } from '@angular/core';
import { Home } from 'src/app/models/home';
import {MatDialog} from '@angular/material/dialog';
import { CommondailogComponent } from 'src/app/shared/commondailog/commondailog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public language :any[] = [
    {label:"English",value:"en",flag:"../../../../assets/flags/en.jpg"},
    {label:"France",value:"fr", flag:"../../../../assets/flags/fr.png"},
    {label:"Korea",value:"kr", flag:"../../../../assets/flags/kr.png"},
  ];
  publicHeader : Home[] = [
    {
      label:'Home', module:'',isActive:true,routeUrl:'home',permission:true
    },
    {
      label:'Dashboard', module:'',isActive:false,routeUrl:'dashboard',permission:true
    },
    {
      label:'Resources', module:'',isActive:false,routeUrl:'resources',permission:true
    },
    {
      label:'Impact Stories', module:'',isActive:false,routeUrl:'impact-stories',permission:true
    },
    {
      label:'About Us', module:'',isActive:false,routeUrl:'about-us',permission:true
    },
    {
      label:'Our Partners', module:'',isActive:false,routeUrl:'our-partners',permission:true
    },
    {
      label:'Join Now', module:'',isActive:false,routeUrl:'join-now',permission:true
    },
    {
      label:'Login', module:'',isActive:false,routeUrl:'login',permission:true
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

  constructor(public dialog: MatDialog,) {}

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
  // languageDropdown(){
  //   this.menuRef.toggleMenu()
  // }
}
