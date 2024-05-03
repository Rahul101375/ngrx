import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText : string = "Submit";
  @Input() buttonColor : string = "";
  @Input() buttonWithImage : string = ''
  @Output() commonButtonEvent : EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    console.log("button text",this.buttonText)
  }
  buttonEvent(){
    switch(this.buttonText){
      case 'Building': 
       return this.commonButtonEvent.emit({buttonText : 'Building'}) ;
       case 'Environmental': 
       return this.commonButtonEvent.emit({buttonText : 'Environmental'}) ;
       case 'Social': 
       return this.commonButtonEvent.emit({buttonText : 'Social'}) ;
    }
  }
}
