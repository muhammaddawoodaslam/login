import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStoreService } from '../services/local-store.service';

@Injectable()
export class restInterceptor implements HttpInterceptor {
  constructor( private store: LocalStoreService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = this.store.getItem('token');
    if (currentUser != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`}
      });
    }
    return next.handle(request);
  }
  private getTimezoneOffset(): string {
    return String(new Date().getTimezoneOffset());
  }
}
