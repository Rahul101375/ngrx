import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl,FormBuilder,Validator} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment =  _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})
export class MenuComponent implements OnInit {
  @Input() matMenuContent : any;
  @Input() matMenuType : string ='' ;
  @Input() buttonLabel: string = 'Menu';
  @Output() matMenuEvent : EventEmitter<any> =  new EventEmitter<any>();
  dateForm! :FormGroup
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  matToggleAction(event:any){
    this.matMenuEvent.emit(event)
  }
  createForm(){
    this.dateForm = this.fb.group({
      from:[moment()],
      // to:[moment()]
    })
  }
  onSubmit(){
    let fromDate = (this.dateForm.controls['from'].value).toISOString().split('T')[0];
    let toDate = (this.dateForm.controls['to'].value).toISOString().split('T')[0];
    this.matMenuEvent.emit({from :fromDate,to:toDate,is_month:false})
  }
  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateForm.value!;
    ctrlValue.day(normalizedMonthAndYear.day());
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.dateForm.setValue(ctrlValue);
    datepicker.close();
    
  }
}
