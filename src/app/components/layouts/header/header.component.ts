import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';
import {MatDialog} from '@angular/material/dialog';
import { CommondailogComponent } from 'src/app/shared/commondailog/commondailog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CommondailogComponent,{
      data:''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
