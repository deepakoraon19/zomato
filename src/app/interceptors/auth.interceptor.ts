import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenWithReq = request.clone({setHeaders : {
      'Authorization' : "Bearer " + localStorage.getItem("token")
    }})
    return next.handle(tokenWithReq);
  }
}
