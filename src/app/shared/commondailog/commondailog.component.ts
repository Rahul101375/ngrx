import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-commondailog',
  templateUrl: './commondailog.component.html',
  styleUrls: ['./commondailog.component.scss']
})
export class CommondailogComponent implements OnInit {

  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    // console.log("data",this.data)
  }

}
