import { NgModule } from '@angular/core';
import { ToastComponent } from './services/toast/toast/toast.component';
import { ToastService } from './services/toast/toast.service';
import { AppRoutingModule } from './app-routing.module';
import { ModalService } from './services/modal/modal.service';
import { ModalComponent } from './services/modal/modal/modal.component';
import { ErrorInterceptor } from './services/interceptors/error.interceptor';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
	entryComponents: [
	ModalComponent,
	],
  declarations: [
	ToastComponent,
	ModalComponent,
    AppComponent,
    MainMenuComponent,
    ErrorComponent,
    LoginComponent,
    TodoComponent,
    StatusComponent
  ],
  imports: [
	AppRoutingModule,
	FormsModule,
	HttpClientModule,
	NgbModule,
    BrowserModule
  ],
  providers: [
	ToastService,
	ModalService,
	{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
	AuthService,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
