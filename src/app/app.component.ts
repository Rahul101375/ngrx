import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngRxIdh';
  public lang : string = "en";
  constructor(private translateService : TranslateService,private cookieService : CookieService){
   
  }
  ngOnInit(): void {
    this.cookieService.set("lang",this.lang)
    this.translateService.setDefaultLang(this.cookieService.get('lang') || this.lang);
  }
  
}
