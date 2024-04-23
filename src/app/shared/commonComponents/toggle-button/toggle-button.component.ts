import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
 @Input() toggle : any;
 @Output() toggleClick : EventEmitter<any> = new EventEmitter<any>();
 @Output() subToggleClick : EventEmitter<any> = new EventEmitter<any>();
 @Input() type : string = ''
constructor() { }

  ngOnInit(): void {
  }
  toggleSelect(item:any){
    if(this.type){
      this.subToggleClick.emit(item)
    }
    else{
      this.toggleClick.emit(item);
    }
  }
}
