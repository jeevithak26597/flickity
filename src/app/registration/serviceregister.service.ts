import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ServiceregisterService {
  skillArr:any;
  url = `https://islot-34ffe.firebaseio.com/skills.json`;

  constructor(private httpService: Http ) {
    this.skillArr= [];
   
  }
  newuser(user) {

    return this.httpService.post('https://islot-34ffe.firebaseio.com/newusers.json', user);

  }

  fetchdata() {
    
    return this.httpService.get(this.url)
     
}
}
