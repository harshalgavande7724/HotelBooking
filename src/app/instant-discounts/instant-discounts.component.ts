import { Component } from '@angular/core';

@Component({
  selector: 'app-instant-discounts',
  templateUrl: './instant-discounts.component.html',
  styleUrl: './instant-discounts.component.css'
})
export class InstantDiscountsComponent {

  signIn() {
    // Add your sign-in logic here
    console.log('Sign in clicked');
  }

  register() {
    // Add your register logic here
    console.log('Register clicked');
  }

}
