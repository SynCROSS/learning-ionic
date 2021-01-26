import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myPets = [
    {
      kind: 'Dog',
      name: 'Hot Dog',
      description: "Dog's not Hot",
      color: '#dc143c',
    },
    {
      kind: 'Cat',
      name: 'Hell-o-Kitty',
      description: "Bill's Favorite",
      color: 'pink',
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.myPets);
  }
}
