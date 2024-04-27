import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-common-table',
  templateUrl: './commontable.component.html',
  styleUrls: ['./commontable.component.scss']
})
export class CommonTableComponent implements OnInit {
  @Input() displayedColumns: any ;
  @Input() values: any ;
  dataSource: MatTableDataSource<any> ;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  constructor() { 
    this.dataSource = new MatTableDataSource(this.values);
  }

  ngOnInit(): void {
    console.log("values",this.values)
    this.dataSource = new MatTableDataSource(this.values);
  }
  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
