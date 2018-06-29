import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterviwerserviceService } from "../../interviwerservice.service";
import { Http } from "@angular/http";
import { EventtileComponent } from "../../../commonislot/pages/eventtile/eventtile.component";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[InterviwerserviceService]
})
export class DashboardComponent implements OnInit {
charti:boolean;
data:object;
keys:Array<string>;
recentevents:Array<string>;
upevents:Array<string>;
edate;
today = new Date();
  constructor(private routers:Router,public http:Http) {
    this.charti=true;
    //console.log(this.event);
          
          //console(this.skill);
   }
  

  ngOnInit() {
    var url='https://islot-34ffe.firebaseio.com/finalevents.json';
    this.data=[];
    this.keys=[];
    this.recentevents=[];
    this.upevents=[];
    this.http.get(url).subscribe((rsp)=>{
      if(rsp.json()){
        this.data=rsp.json();
        this.keys=Object.keys(this.data);
        console.log(this.keys);
        console.log(this.data);
        this.divideEvents();
      }

    })
  }
  divideEvents(){
  
    // for(let i=0;i<this.keys.length;i++){
    //   if(new Date(this.data[this.keys[i]].date)<date){
    //     this.recentevents.push(this.data[this.keys[i]].name);
    //   }else{
    //     this.upevents.push(this.data[this.keys[i]].name);
    //   }
    for (var key in this.data) {
      this.edate = this.data[key]['date'];
     console.log(this.edate);

      if(new Date(this.edate) > this.today)
        {
          this.upevents.push(this.data[key]);
          console.log(this.upevents);
        }
      
          else {
            this.recentevents.push(this.data[key]);
            console.log(this.recentevents);
          }

    }
    console.log(this.upevents);
    console.log(this.recentevents);
    }
  }

