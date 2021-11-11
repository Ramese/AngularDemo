import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { ModalService } from '../modal/modal.service';
import { ModalContent, ActionForClient } from '../modal/modal/modal.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
      private auth: AuthService,
        private modal: ModalService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
		var errorResponse: ErrorResponse = err.error;
		
		console.log(errorResponse);
        
        var mc: ModalContent = new ModalContent();
        mc.actionForClient = errorResponse.ActionForClient;
        mc.content = errorResponse.Message;
        mc.style = "text-white bg-danger";

        this.modal.push(mc);
          
        const error = err.error.message || err.statusText;
        return throwError(error);
      }))
  }
};

class ErrorResponse {
    ActionForClient: ActionForClient;
    IsTranslatable: boolean;
    Message: string;
    SendEmail: boolean;
}