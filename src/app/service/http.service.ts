import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { login } from './api_end_point';
var CryptoJS = require("crypto-js");

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.baseURL;
  private formDataSubject = new BehaviorSubject<any>(null);
   formData$ = this.formDataSubject.asObservable();
  private snackBarSubject = new BehaviorSubject<any>(null);
   snackBarData$ = this.snackBarSubject.asObservable()
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

setHeadersLogin():any {
  let headers = new HttpHeaders({
      "Content-Type" : "application/json; charset=utf-8",
  });
  return headers;
}


   getMethod(url:string ):Observable<any>{
    return this.http.get(this.baseUrl + url , this.getToken() ? this.setHeaders() : {}).pipe((catchError(this.errorHandler.bind)))
   }
   allPostMethod(url:string,body:any){
    if(url === login.AUTH_LOGIN){
      return this.http.post(this.baseUrl + url ,body,this.setHeadersLogin()).pipe((catchError(this.errorHandler.bind)))
    }
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
  let cipherText = CryptoJS.HmacSHA256(password,secretKey).toString()
   return cipherText
}
updateSnackBarData(snackbarData:any){
  this.snackBarSubject.next(snackbarData)
}
}
