import { Component, OnInit } from '@angular/core';
import { IdhRepositoryDataService } from 'src/app/service/idhRepositoryData.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users : any= []
  constructor(private idhRepositoryDataService : IdhRepositoryDataService) { }

  ngOnInit(): void {
    this.fetchAll();
  }
  fetchAll(){
    const userData = this.idhRepositoryDataService.getList()[1];
    userData.subscribe((res : any) =>{
      this.users = res[0].data;
    })
  }
}
