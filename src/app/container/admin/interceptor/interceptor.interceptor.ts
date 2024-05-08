import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.getToken() && (this.router.url.includes('admin') ||this.router.url.includes('login') )) {
      request = request.clone({
        setHeaders: ({
          'Authorization': `Bearer ${this.getToken()}`
        })
      })
    }
    return this.handle(next, request);
  }
  getToken() {
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
