import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InterviwerserviceService {
url='https://project-islot.firebaseio.com/events.json';
data;
timeslot;
skill; 



constructor(private http:Http) { 
this.timeslot=[];
this.skill=[];
}
fetchData(){
  this.http.get(this.url)
  .subscribe(rsp=>{
    console.log(rsp.json());
    this.data=rsp.json();
    console.log(this.data);
   for(var i in this.data){
     this.skill=this.data[i].skill;
     console.log(this.skill);
   }
  })
}
}