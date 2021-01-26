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

  isBold = false;
  isItalic = false;
  isLarge = false;

  currentStyles = {
    'font-weight': 500,
    'font-style': 'normal',
    'font-size': '1rem',
  };

  constructor() {}

  ngOnInit() {
    console.log(this.myPets);
  }

  setStyles() {
    this.currentStyles = {
      'font-weight': this.isBold ? 700 : 500,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size': this.isLarge ? 'large' : '1rem',
    };

    console.log(JSON.stringify(this.currentStyles));
  }
}
