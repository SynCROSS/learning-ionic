import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.page.html',
  styleUrls: ['./addmenu.page.scss'],
})
export class AddmenuPage implements OnInit {
  addMenuForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.addMenuForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      context: ['', [Validators.required]],
    });
  }

  async submitForm() {
    this.isSubmitted = true;

    if (!this.addMenuForm.valid) {
      console.log(this.addMenuForm.value);

      console.log('All Fields are Required');
      return false;
    }

    try {
      const response = await axios.post('http://localhost:3000/menues', {
        title: this.addMenuForm.value.title + '',
        context: this.addMenuForm.value.context + '',
        createdAt: Date.now(),
      });
      console.log(response);
      this.router.navigate(['/menu', response.data]);
    } catch (error) {
      console.error(error);
    }
  }
}
