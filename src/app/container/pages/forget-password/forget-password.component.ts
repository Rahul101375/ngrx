import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetButtonText :string = 'getVerifiedLink';
  isButtonStyle :boolean = true;
  backToHome : string = 'backToHome'
  constructor() { }

  ngOnInit(): void {
  }
  public forgetPasswordForms:any = {
    formField :  [
      { type: 'email', name: 'email', label: 'Email', required: true,columnSize:12 ,fieldType:'email'},
    ]
  };
}
