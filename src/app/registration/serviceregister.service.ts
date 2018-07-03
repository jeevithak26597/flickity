import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ServiceregisterService {
  skillArr:any;
  users;
  usrArr;
  skills;
  url = `https://chandanaisot.firebaseio.com/skills.json`;

  constructor(private httpService: Http ) {
    this.skillArr= [];
   this.users;
   this.usrArr=[];
  }
  newuser(user) {

    return this.httpService.post('https://chandanaisot.firebaseio.com/users.json', user);


  }
  fetchSkills(){
    const url='https://chandanaisot.firebaseio.com/skills.json';
         this.httpService.get(url)
        .subscribe((rsp)=>{
            this.skills=rsp.json();
            for(var key in this.skills){
             // console.log(this.data[key]);
              this.skillArr.push(this.skills[key]);
            }
           
        });
  }
  fetchUser(){
    const url='https://chandanaisot.firebaseio.com/users.json';
    this.httpService.get(url)
        .subscribe((rsp)=>{
            this.users=rsp.json();
            for(var key in this.users){
              this.users[key]["key"]=key;
             // console.log(this.data[key]);
              this.usrArr.push(this.users[key]);
            }
        });
  }
  fetchdata() {
    
    return this.httpService.get(this.url)
     
}
}
