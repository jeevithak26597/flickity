import { Component, OnInit, Input } from '@angular/core';
import {IContact} from '../interviewer-contact/interviewer-contact.component'
import { EventService } from '../../event.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-eventdisplay',
  templateUrl: './eventdisplay.component.html',
  styleUrls: ['./eventdisplay.component.css'],
  providers:[EventService],
})
export class EventdisplayComponent implements OnInit {
 
eventData;
slotData;
totalNumber;
intercount;
  constructor(private eventService:EventService,public httpService:Http) { 
    this.eventData = this.eventService.getCurrentObj();
    this.slotData=this.eventData.slots;
    console.log(this.slotData);


  }
  check(obj){
    if(obj.interviewers!=undefined){
      return true;
    }
    else{
      return false;
    }
  }
  updateCount(slot,inti,count){
  this.slotData[slot].interviewers[inti].noOfInterviews=count;
  console.log(this.slotData[slot].interviewers[inti].noOfInterviews);
      
  }
  closeEvent(){
  let key=this.eventService.getCurrentKey;
  var url='https://islot-34ffe.firebaseio.com/events';
  console.log(JSON.stringify({slots:this.slotData}));
  this.httpService.patch(url+"/"+key+".json",JSON.stringify({
    slots: this.slotData
  })).subscribe(res=>{
      console.log(res.json);
  });
}
  ngOnInit() {
  }
  valchange(event){
    console.log()
  }
}
