import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.has('x-access-token')) {
      console.log("Request already has Authorization header, skipping...");
      return next.handle(request);
    }
    const token = this.getToken();
    if (token) {
      console.log("Token exists, adding header...");
      const headers = new HttpHeaders({
        "Content-Type" : "application/json",
        'x-access-token': token
      });
      request = request.clone({ headers });
    } else {
      console.log("Token not found.");
    }
    return this.handle(next, request);
    
  }
  private getToken() : string | null {
    return sessionStorage.getItem('token')
  }
  getUserInfo() {
    return sessionStorage.getItem('userInfo')
  }
  handle(next: HttpHandler, request: HttpRequest<unknown>) {
    return next.handle(request).pipe(tap((event) => {
      if (event instanceof HttpResponse) {
        // loader related variable
      }
    },
      (error: any) => {
        if (error?.error.message === "User UnAuthorized Token") {
          sessionStorage.clear()
        }
        if (error?.error?.responseCode == '403' && error?.error?.logout) {
          sessionStorage.clear();
        }
      }
    )
      ,
      catchError((error: HttpErrorResponse) => {
        console.log("interceptorError", error);
        return throwError(error);
      })
    )
  }
}
