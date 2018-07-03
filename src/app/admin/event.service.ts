

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
var currentObj;
var currentKey;
@Injectable()
export class EventService {
  url = 'https://chandanaisot.firebaseio.com/events.json';
  data;
  today = new Date();
  upcomingevent;
  recentevent;
  edate;
  day;
  users;
  skills;
  locations;
  skillArr;
  locArr;
  usrArr;
  particulareventdata;
  constructor(private httpservice: Http) {
    this.upcomingevent = [];
    this.recentevent = [];
    this.skills;
    this.locations;
    this.skillArr=[];
   this.locArr=[];
   this.users;
   this.usrArr=[];
  }
  setCurrentObj(obj,key){
    currentObj = obj;
    currentKey=key;
    
  }
  getCurrentObj(){
    
     return currentObj;
  }
  getCurrentKey(){
    return currentKey;
   
  }
  fetchData() {
    this.httpservice.get(this.url)
      .subscribe(rsp => {
        console.log(rsp.json());
        this.data = rsp.json();
        for (var key in this.data) {
          this.data[key]["key"]=key;
          this.edate = this.data[key]['date'];
         console.log(this.edate);

          if(new Date(this.edate) > this.today)
            {
              this.upcomingevent.push(this.data[key]);
              console.log(this.upcomingevent);
            }
          
              else {
                this.recentevent.push(this.data[key]);
                console.log(this.recentevent);
              }

        }
        console.log(this.upcomingevent);
        console.log(this.recentevent);
      });

  }
  fetchSkills(){
    const url='https://chandanaisot.firebaseio.com/skills.json';
         this.httpservice.get(url)
        .subscribe((rsp)=>{
            this.skills=rsp.json();
            for(var key in this.skills){
             // console.log(this.data[key]);
              this.skillArr.push(this.skills[key]);
            }
           
        });
  }
  fetchLocation(){
    const url='https://chandanaisot.firebaseio.com/location.json';
    this.httpservice.get(url)
        .subscribe((rsp)=>{
            this.locations=rsp.json();
            for(var key in this.locations){
             // console.log(this.data[key]);
              this.locArr.push(this.locations[key]);
            }
        });
  }
  fetchUser(){
    const url='https://chandanaisot.firebaseio.com/users.json';
    this.httpservice.get(url)
        .subscribe((rsp)=>{
            this.users=rsp.json();
            for(var key in this.users){
              this.users[key]["key"]=key;
             // console.log(this.data[key]);
              this.usrArr.push(this.users[key]);
            }
        });
  }

}









