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
    .get('/add')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      error(error);
    });
}
