import { Component, Input, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isMatMenuOpen : boolean = false;
  @Input() matMenuContent : any ;
  menuTrigger!: MatMenuTrigger;
  @Input() buttonLabel: string = 'Menu';
  constructor() { }

  ngOnInit(): void {
    console.log("matMenuContent",this.matMenuContent)
  }
  

  // toggleMenu() {
  //   if (this.menuTrigger) {
  //     this.menuTrigger.toggleMenu();
  //   }
  // }

}
