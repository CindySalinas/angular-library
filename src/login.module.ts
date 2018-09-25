import { NgModule } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
@NgModule({
  declarations: [
    Login
  ],
  exports: [
    Login
  ]
})
export class LoginModule {
  static forRoot() {
    return {
      ngModule: LoginModule,
      providers: [LoginService]
    }
  }
}