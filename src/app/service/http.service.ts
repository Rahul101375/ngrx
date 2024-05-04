import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
var Crypto = require("crypto-js");

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.baseURL;
  private formDataSubject = new BehaviorSubject<any>(null);
   formData$ = this.formDataSubject.asObservable()
  constructor(private http:HttpClient) { }
  getToken() {
    return sessionStorage.getItem("token");
}

  setHeaders():any {
  let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "x-access-token": this.getToken()!,
  });
  return headers;
}

   getMethod(url:string ):Observable<any>{
    return this.http.get(this.baseUrl + url , this.getToken() ? this.setHeaders() : {}).pipe((catchError(this.errorHandler.bind)))
   }
   allPostMethod(url:string,body:any){
    return this.http.post(this.baseUrl + url , body ,this.getToken() ? this.setHeaders() : {}).pipe((catchError(this.errorHandler.bind)))
   }

    private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (response.status === 401) {
      // auth token delete
      // redirect login page
    }
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (key === 'isTrusted') {
      // this will occur when not connected to internet
    } else {
      message = key + ' : ' + message;
    }
    // call snackbar and show error with message
    return throwError({messages: message, error});
  }
  updateFormData(formData: any) {
    this.formDataSubject.next(formData);
  }

getSecretKey(secretKey:any,password:any){
  return Crypto.HmacSHA256(password, secretKey).toString();
}
}
