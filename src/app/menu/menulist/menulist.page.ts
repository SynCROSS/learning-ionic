import { Component, OnInit } from '@angular/core';
import axios from 'axios';

const getAxiosData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/menues');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.page.html',
  styleUrls: ['./menulist.page.scss'],
})
export class MenulistPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  menues = getAxiosData().then((res) => {
    return res;
  });
}
