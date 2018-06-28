import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,AbstractControl,ValidationErrors,Validators } from '@angular/forms';
import { Http } from '@angular/http';
import {EventModel} from '../../../commonislot/newmodel/events';
@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {
  regFormGroup: FormGroup;
  errMessage:string;
  eventName:string;
  date:string;
  starttime:string;
  endtime:string;
  location:string;
  skill:Array<string>=["json","angular"];
  constructor(private httpService: Http) {
    this.regFormGroup = new FormGroup({
      eventName: new FormControl('', Validators.required),
      date: new FormControl('',Validators.required),
      starttime: new FormControl('',Validators.required),
      endtime: new FormControl('',Validators.required),
      location: new FormControl('chennai', Validators.required),
      //skill: new FormControl('Angular', Validators.required),
    })
  }

  ngOnInit() {
  }
  check(date1 : Date)
  { 
    this.errMessage="";
    var cur=new Date();
    if(new Date(date1) < cur)
      {
        this.errMessage="Invalid Date";
        return false;
      }
  }


  onCreateEvent() {
    console.log(this.regFormGroup.value);
    console.log(this.regFormGroup.value.eventName);
    var eventObj=new EventModel(this.regFormGroup.value.eventName,this.regFormGroup.value.date,this.regFormGroup.value.starttime,this.regFormGroup.value.endtime,3,this.regFormGroup.value.location,this.skill);
   console.log(eventObj);
   
    const postData = {

    }
    const url = 'https://islot-34ffe.firebaseio.com/finalevents.json';
    this.httpService.post(url, JSON.stringify(eventObj))
      .subscribe(rsp => console.log(rsp));

    console.log('Posted');
 
  }


}



