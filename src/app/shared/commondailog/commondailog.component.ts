import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-commondailog',
  templateUrl: './commondailog.component.html',
  styleUrls: ['./commondailog.component.scss']
})
export class CommondailogComponent implements OnInit {
 formType : any
  constructor(@Inject(MAT_DIALOG_DATA) public data:MatDialog) {}

  ngOnInit(): void {
    console.log("dialog ",this.data)
    this.formType = this.data;
  }

}
