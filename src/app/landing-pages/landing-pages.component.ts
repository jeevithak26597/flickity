import { Component, OnInit } from '@angular/core';
import { ITile } from '../tile/tile.component';
import { CommonService } from '../common.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-landing-pages',
  templateUrl: './landing-pages.component.html',
  styleUrls: ['./landing-pages.component.css']
})
export class LandingPagesComponent implements OnInit {

  skillInformation:any;

  constructor(private commonservice: CommonService,private http: HttpClient) {
    
    this.http.get('http://localhost:4200/assets/data/skills.json')
    .subscribe(data => {
      console.log(".....",data)
      this.skillInformation = data;
     });
  }
  ngOnInit() {
    this.commonservice.getJsonData();
        
      
  }

}
