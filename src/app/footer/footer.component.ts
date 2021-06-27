import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from '../common-utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private CommonUtilsService: CommonUtilsService) { }

  lastUpdate = "";
  
  ngOnInit(): void {  
   this.lastUpdate = this.CommonUtilsService.getLastUpdate();
  }

}
