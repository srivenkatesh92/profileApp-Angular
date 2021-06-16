import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  lastUpdate = "";
  ngOnInit(): void {
   const d = new Date();   
   this.lastUpdate = "Last updated on "+this.monthNames[d.getMonth()]+", "+d.getFullYear()+".";
  }

}
