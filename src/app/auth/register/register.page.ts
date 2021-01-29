import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public alertController: AlertController,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z{2,3}$]'),
        ],
      ],
      birthday: [],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  fetchDate(e: { target: { value: string | number | Date } }) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get('birthday').setValue(date, {
      onlyself: true,
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      console.log('All Fields Must be Required.');
      this.presentAlert('All Fields Must be Required');
      return false;
    }
    this.router.navigate(['/login']);
    console.log(this.registerForm.value);
  }
}
