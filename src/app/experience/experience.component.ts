import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceTitle = ".experience()";
  experiences: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/experience.json").subscribe(data =>{      
      this.experiences = data;
    })
  }

}
