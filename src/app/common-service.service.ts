import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommonServiceService {
presentUser;
users;
userArr;
  constructor(private httpservice: Http) { 

  }
  fetchUser(){
    const url='https://chandanaisot.firebaseio.com/users.json';
    this.httpservice.get(url)
        .subscribe((rsp)=>{
            this.users=rsp.json();
            for(var key in this.users){
              this.users[key]["key"]=key;
             // console.log(this.data[key]);
              this.userArr.push(this.users[key]);
            }
        });
  }
  setUser(key){
    this.presentUser=key;
  }
  getUser(){
    return this.presentUser;
  }

}
