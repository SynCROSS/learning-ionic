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

  menues = [
    // {
    //   title: '',
    //   context: '',
    //   createdAt: 0,
    // },
  ];

  async submitForm() {
    this.isSubmitted = true;

    if (!this.addMenuForm.valid) {
      console.log(this.addMenuForm.value);

      console.log('All Fields are Required');
      return false;
    }

    this.menues = [
      ...this.menues,
      {
        id: this.menues.length + 1 * 1,
        title: this.addMenuForm.value.title + '',
        context: this.addMenuForm.value.context + '',
        createdAt: Date.now(),
      },
    ];

    try {
      const response = await axios.post('http://localhost:3000/menues', {
        id: this.menues[this.menues.length - 1].id * 1,
        title: this.menues[this.menues.length - 1].title + '',
        context: this.menues[this.menues.length - 1].context + '',
        createdAt: this.menues[this.menues.length - 1].createdAt * 1,
      });
      console.log(response);
      this.router.navigate(['/menu']);
    } catch (error) {
      console.error(error);
    }
  }
}
