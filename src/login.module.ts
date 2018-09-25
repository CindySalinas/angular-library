import { NgModule } from '@angular/core';
import { LoginService } from './login.service';
@NgModule({
})
export class LoginModule {
  static forRoot() {
    return {
      ngModule: LoginModule,
      providers: [LoginService]
    }
  }
}