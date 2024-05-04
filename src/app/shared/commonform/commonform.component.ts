import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { captcha } from 'src/app/service/api_end_point';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-common-form',
  templateUrl: './commonform.component.html',
  styleUrls: ['./commonform.component.scss']
})
export class CommonFormComponent implements OnInit {
  form!: FormGroup;
  @Input() fields: any[] = [];
  @Input() isButtonStyle : boolean = false;
  @Input() buttonText:string = "Submit";
  @Output() submitForm : EventEmitter<any> = new EventEmitter<any>();
  @Output() dialogCloseEvent : EventEmitter<any> = new EventEmitter<any>();
  endPoint: string = 'create';
  captchaImage: string = '';
  captchaId: string = '';
  constructor(private fb: FormBuilder, private httpService:HttpService) { }


  ngOnInit() {
    this.getCaptcha()
    this.form = this.fb.group({});
    if (this.fields) {
      this.addFormControls();
    } else {
      console.error("Fields array is null or undefined.");
    }
  }
  addFormControls() {
    this.fields?.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      const control = this.fb.control('', validators);
      this.form.addControl(field.name, control);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.markAllFieldsAsTouched(this.form);
    }
    this.submitForm.emit(this.form.value);
    this.form.value.captcha_id = this.captchaId
    this.httpService.updateFormData(this.form.value);
    this.dialogCloseEvent.emit(true)

  }

  markAllFieldsAsTouched(group: FormGroup) {
    Object.values(group.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllFieldsAsTouched(control);
      }
    });
  }
  refreshCaptcha(id:string){
   this.endPoint = `refresh/${id}`
   this.getCaptcha()
  }
  getCaptcha(){
    this.httpService.getMethod(captcha.USER_CAPTCHA + this.endPoint).subscribe({
      next : (response)=>{
        this.captchaImage = response.data.captcha;
        this.captchaId = response.data.id;
        this.endPoint = 'create'
        console.log("captcha",this.captchaImage)
      },
      error : (error)=>{
        console.log("captcha", error)
      }
    })
  }
}
