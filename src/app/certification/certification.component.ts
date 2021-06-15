import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 

interface certificates {  
  id: Number;  
  name: String;  
  description: String;  
  link: String;  
} 

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html', 
  styleUrls: ['./certification.component.scss']
})

export class CertificationComponent implements OnInit {

  title = "Licenses & Certifications";
  certificates: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/certification.json").subscribe(data =>{      
      this.certificates = data;
    })
  }
}
