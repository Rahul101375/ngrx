import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl,FormBuilder,Validator} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {ThemePalette} from '@angular/material/core';
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

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})
export class MenuComponent implements OnInit {
  @Input() matMenuContent : any;
  @Input() matMenuType : string ='' ;
  @Input() buttonLabel: string = 'Menu';
  @Input() type:string = '';
  @Input() iPList:any = [];
  @Input() factoryList:any = [];
  @Output() matMenuEvent : EventEmitter<any> =  new EventEmitter<any>();
  dateForm! :FormGroup;
  task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

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
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: any) {
    console.log("all",completed)
    // this.allComplete = completed;
    // if (this.task.subtasks == null) {
    //   return;
    // }
    // this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
