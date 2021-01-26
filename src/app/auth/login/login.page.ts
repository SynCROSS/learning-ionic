import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('All Fields are Required');
      return false;
    }
    console.log(this.ionicForm.value);
  }
}
