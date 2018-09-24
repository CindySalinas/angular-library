import { NgModule } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
@NgModule({
  declarations: [
    Login,
    LoginService
  ],
  exports: [
    Login,
    LoginService
  ]
})
export class LoginModule { }