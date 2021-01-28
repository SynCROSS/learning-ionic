import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.page.html',
  styleUrls: ['./menulist.page.scss'],
})
export class MenulistPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  menues = axios
    .get('http://localhost:3000/menues')
    .then((response) => {
      console.log('response:', response.data);
      this.menues = response.data;
    })
    .catch((error) => {
      error(error);
    });
}
