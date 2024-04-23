// progress.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {ProgressService} from "../../pages/admin/services/progress.service";

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {
  constructor(private progressService: ProgressService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Update progress to indicate that an HTTP request is in progress
    this.progressService.updateProgress(0);

    return next.handle(req).pipe(
      finalize(() => {
        // Update progress to indicate that the HTTP request has completed
        this.progressService.updateProgress(100);
      })
    );
  }
}
