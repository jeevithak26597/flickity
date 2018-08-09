import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from "@angular/http";
import { ITile } from './tile/tile.component';
import 'rxjs/add/operator/map';
@Injectable()
export class CommonService {
  skillInformation: Array<ITile>;
  item: ITile[];
  navItems: any;
  

  constructor(private http: HttpClient) { 

  }

  getJsonData(){
    this.navItems = this.http.get("../data/skills.json");
    console.log("print",this.navItems);
  }

}
