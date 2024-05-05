import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  errorMessage:string = ""
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.snackBarData$.subscribe({
      next:(res)=>{
        this.errorMessage = res.message
      }
    })
  }
 

}
