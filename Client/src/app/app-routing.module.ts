import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginGuard, AuthGuard } from './services/guards';

const routes: Routes = [
  { path: '', component: ErrorComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ErrorComponent, canActivate: [AuthGuard] },
  { path: 'detail/:email', component: ErrorComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
