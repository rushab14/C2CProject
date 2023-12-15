import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SigninComponent {
  username: string='';
  password: string='';

  constructor(private router: Router) {}

  signIn() {
    // Perform authentication logic (e.g., validate credentials)
    // For simplicity, assume the user is authenticated

    // Redirect to another page after successful sign-in
    this.router.navigate(['/dashboard']);
  }
}


