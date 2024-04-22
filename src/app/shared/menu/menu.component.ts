import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() matMenuContent : any;
  @Input() matMenuType : string ='' ;
  @Input() buttonLabel: string = 'Menu';
  @Output() languageEvent : EventEmitter<any> =  new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  matToggleAction(event:any){
    this.languageEvent.emit(event)
  }

}
