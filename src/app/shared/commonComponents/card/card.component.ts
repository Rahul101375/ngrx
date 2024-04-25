import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() columnSize : string = "6";
  @Input() cardData : any = [];
  constructor() { }

  ngOnInit(): void {
    console.log("card",this.cardData,this.columnSize)
  }

}
