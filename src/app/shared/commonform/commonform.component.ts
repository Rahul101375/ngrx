import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-common-form',
  templateUrl: './commonform.component.html',
  styleUrls: ['./commonform.component.scss']
})
export class CommonFormComponent implements OnInit {
  form!: FormGroup;
  @Input() fields: any[] = []
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
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
  }

  markAllFieldsAsTouched(group: FormGroup) {
    Object.values(group.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllFieldsAsTouched(control);
      }
    });
  }

}
