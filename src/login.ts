import { Component } from '@angular/core';

@Component({
  selector: 'login',
  styles: [`
  h1 {
    color: orange;
  }
`],
  template: `
  <div>
    <h1 (click)="onClick()">{{message}}</h1>
  </div>`
})
export class Login {
  message = "Pulsame!";
  onClick = () => this.message = "Hello World!";
}