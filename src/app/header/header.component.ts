import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from '../common-utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private CommonUtilsService: CommonUtilsService) { }

  imagePath = './assets/img/background/bg-code-';
  backgroundImage = ''; 

  ngOnInit(): void {
    this.backgroundImage = this.imagePath + this.CommonUtilsService.getRandomNumber(1,7) + '.PNG';
    //this.backgroundImage = this.imagePath + "1" + '.gif';
  }

}
