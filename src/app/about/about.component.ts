import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profilepic: any = [];
  socialMedia: any = [];

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.httpClient.get("assets/data/about.json").subscribe(data =>{      
      this.socialMedia = data;
      console.log(data);
    })
  }   

}
