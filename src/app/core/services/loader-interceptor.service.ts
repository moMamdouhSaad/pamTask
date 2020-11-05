import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService implements HttpInterceptor {
  public constructor(private loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loaderService.hide();
          }
        },
        (err: any) => {
          this.loaderService.hide();
        }
      )
    );
  }
}
