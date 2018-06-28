import { Component, OnInit } from '@angular/core';
import { EventService } from "../../event.service";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
// import { EventtileComponent } from '../../../commonislot/pages/eventtile/eventtile.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[EventService],
})
  export class DashboardComponent {
    event;
    recentevents;
    recentcontent;
    upcomingevents;
   today = new Date();
  //  dd= this.today.getDate();
  //  mm = this.today.getMonth() + 1; 
  //  yyyy = this.today.getFullYear();
  constructor(public eventService: EventService) {
    this.recentcontent=[];
    this.eventService.fetchData();
    this.event=this.eventService.data;
    this.recentevents = this.eventService.recentevent;
    this.upcomingevents=this.eventService.upcomingevent;
    console.log('recent',this.recentevents);
  
    this.recentevents.sort(function(a,b){
      return (new Date(a.eventDate).getTime())-(new Date(b.eventDate).getTime());
    }) 
    console.log(this.recentevents);
    this.splitevents();
  }
  public get eventser(){
    return this.eventService;
  }
  splitevents() {
   for(var i=0;i<5;i++){
     this.recentcontent.push(this.recentevents[i]);
   }
  }
  details(eventobj){
    this.eventService.particulareventdata=eventobj;
    console.log(eventobj);
  }
  }
  
  