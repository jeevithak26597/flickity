import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,AbstractControl,ValidationErrors,Validators } from '@angular/forms';
import { Http } from '@angular/http';
import {EventModel} from '../../../commonislot/newmodel/events';
import { EventService } from "../../event.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css'],
  providers:[EventService],
})
export class EventCreationComponent implements OnInit {
  regFormGroup: FormGroup;
  errMessage:string;
  eventName:string;
  date:string;
  starttime:string;
  endtime:string;
  location:string;
  skill:string;
  availableSkills;
  router;
  availableLocations;
  constructor(private httpService: Http,public service:EventService,public r:Router) {
    this.router=r;
    this.service.fetchLocation();
    
    
    this.service.fetchSkills();
    
    this.availableSkills=this.service.skillArr;
    this.availableLocations=this.service.locArr;
    console.log(this.service.locArr);
   // console.log(this.service.skills);
    this.regFormGroup = new FormGroup({
      eventName: new FormControl('', Validators.required),
      date: new FormControl('',Validators.required),
      starttime: new FormControl('',Validators.required),
      endtime: new FormControl('',Validators.required),
      location: new FormControl('', Validators.required),
      skill: new FormControl('', Validators.required),
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
   // console.log(this.regFormGroup.value);
    //console.log(this.regFormGroup.value.eventName);
    var eventObj=new EventModel(this.regFormGroup.value.eventName,this.regFormGroup.value.date,this.regFormGroup.value.starttime,this.regFormGroup.value.endtime,3,this.regFormGroup.value.location,this.regFormGroup.value.skill);
 // console.log(eventObj);
   
    const postData = {

    }
    const url = 'https://chandanaisot.firebaseio.com/events.json';
    this.httpService.post(url, JSON.stringify(eventObj))
      .subscribe(rsp => console.log(rsp));

    console.log(JSON.stringify(eventObj));
 this.router.navigate(['admin/dashboard']);
  }


}

