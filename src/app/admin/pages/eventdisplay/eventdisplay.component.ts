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
    this.eventService.fetchUser;


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
  var urlUser='https://islot-34ffe.firebaseio.com/users';
  console.log(JSON.stringify({slots:this.slotData}));
  this.httpService.patch(url+"/"+key+".json",JSON.stringify({
    slots: this.slotData
  })).subscribe(res=>{
      console.log(res.json);
  });
  this.httpService.patch(url+"/"+key+".json",JSON.stringify({
    isClosed: true
  })).subscribe(res=>{
      console.log(res.json);
  });
  for(var i=0;i<this.slotData.length;i++){
          console.log(this.slotData[i]);
          var points;
          for(var j=0;j<this.slotData[i].interviewers.length;j++){
            var interId=this.slotData[i].interviewers[j].id;
            for(var k=0;i<this.eventService.usrArr;k++){
              if(this.eventService.usrArr[k].id==interId){
                this.eventService.usrArr[k].totalpoints+=this.slotData[i].interviewers[j].noOfInterviews;

                
                this.httpService.patch(urlUser+"/"+this.eventService.usrArr[k].key+".json",JSON.stringify({
                  totalpoints:this.slotData[i].interviewers[j].noOfInterviews
                })).subscribe(res=>{
                    console.log(res.json);
                });
              }
            }
          }
  }

}
  ngOnInit() {
  }
  valchange(event){
    console.log()
  }
}
