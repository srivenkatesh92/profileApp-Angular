import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  imagePath = './assets/img/background/bg-code-';
  backgroundImage = '';

  randomNumber = function(min : any, max : any) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  ngOnInit(): void {
    this.backgroundImage = this.imagePath + this.randomNumber(1,6) + '.PNG';
    //this.backgroundImage = this.imagePath + "1" + '.gif';
  }

}
