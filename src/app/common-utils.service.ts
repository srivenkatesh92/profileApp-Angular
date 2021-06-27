import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonUtilsService {

  constructor() { }

  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  getRandomNumber(min : any, max : any) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getLastUpdate(){
    const d = new Date();   
    return "Last updated on "+this.monthNames[d.getMonth()]+", "+d.getFullYear()+".";
  }

}
