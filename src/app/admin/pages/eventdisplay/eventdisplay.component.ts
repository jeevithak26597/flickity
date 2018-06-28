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
  constructor(private eventService:EventService) { 
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
  console.log(slot);
  console.log(inti);
  console.log(count);
  }

  ngOnInit() {
  }
  valchange(event){
    console.log()
  }
}
