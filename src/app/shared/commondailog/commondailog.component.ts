import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { otpRefresh } from 'src/app/service/api_end_point';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-commondailog',
  templateUrl: './commondailog.component.html',
  styleUrls: ['./commondailog.component.scss']
})
export class CommondailogComponent implements OnInit {
 formType : any
  otpCount: string = '0';
  isCountShow: boolean= false;
  constructor(@Inject(MAT_DIALOG_DATA) public data:MatDialog,private dialogRef: MatDialogRef<CommondailogComponent>,private httpService : HttpService) {}

  ngOnInit(): void {
    console.log("dialog ",this.data)
    this.formType = this.data;
  }
  closeDialog(event:any){
    this.dialogRef.close({event});
    // write code here after otp verification
  }

  resendOTP() {
    this.isCountShow = true
    let seconds: number = 1 * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.otpCount = `${textSec}`;

      if (seconds == 0) {
        this.isCountShow = false
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
    this.otpRefresh()
  }
  otpRefresh(payload:any = "") {
   this.httpService.allPostMethod(otpRefresh.OTP_REFRESH,payload).subscribe(
    {
      next : (otpResponse)=>{
        this.httpService.updateSnackBarData(otpResponse.message);
        this.outSideApiCall()
        console.log("otp refresh",otpResponse)
      }
    }
   )
  }
  outSideApiCall() {
    let endPoint = 'https://googleads.g.doubleclick.net/pagead/id'
    this.httpService.getOutSideMethod(endPoint).subscribe({
      next : (res)=>{
        console.log("out-side",res);
      },
      error : (error)=>{
        console.log("out-side error",error)
      }
    })
  }
}
