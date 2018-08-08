import { Component, OnInit } from '@angular/core';
import { ITile } from '../tile/tile.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-landing-pages',
  templateUrl: './landing-pages.component.html',
  styleUrls: ['./landing-pages.component.css']
})
export class LandingPagesComponent implements OnInit {

  skillInformation: Array<ITile>;
  constructor(private commonservice: CommonService) {
  }
  ngOnInit() {
      // this.commonservice.getSkills().then(skillInformation => {this.skillInformation = skillInformation;});
  }

}
