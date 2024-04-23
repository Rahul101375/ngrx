import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrls: ['./mat-tab.component.scss']
})
export class MatTabComponent implements OnInit {
 @Input() selectedTabs:any;
 @Output() tabMenuClick:EventEmitter<any> = new EventEmitter<any>();
 public selected : string[] = ['programView','countryView','ipView','factoryView'];
 public chields :any = []
  constructor() { }

  ngOnInit(): void {
  }
  tabSelection(tabData:any){
    this.chields = this.selectedTabs[0][this.selected[tabData.index]][tabData.index].child ? this.selectedTabs[0][this.selected[tabData.index]][tabData.index].child : [];
    this.tabMenuClick.emit(this.chields)
  }
}
