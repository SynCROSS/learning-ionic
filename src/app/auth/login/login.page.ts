import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('All Fields are Required');
      return false;
    }
    this.router.navigate(['/menu']);
    console.log(this.loginForm.value);
  }
}
