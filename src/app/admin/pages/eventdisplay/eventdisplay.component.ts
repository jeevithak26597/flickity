import { Component, OnInit, Input } from '@angular/core';
import {IContact} from '../interviewer-contact/interviewer-contact.component'
@Component({
  selector: 'app-eventdisplay',
  templateUrl: './eventdisplay.component.html',
  styleUrls: ['./eventdisplay.component.css']
})
export class EventdisplayComponent implements OnInit {
  contactArr:Array<IContact> = [
    {
      name:'chandana',
      id:123,
      mobileNo:345636754,
      email:'jchandana@2314'
    },
    {
      name:'chandana2',
      id:123,
      mobileNo:345636754,
      email:'jchandana@2314'
    },
    {
      name:'chandana3',
      id:123,
      mobileNo:345636754,
      email:'jchandana@2314'
    }
  ]

  eventSlots =[
     {
       startTime:'9:00am',
       endTime:'10:00am',
       slotInterviewers:[
         {
           name:"dustin",
           noOfInterviewsTaken:12
         },
         {
          name:"blake",
          noOfInterviewsTaken:9
        }
       ]
     },
     {
      startTime:'10:00am',
      endTime:'11:00am',
      slotInterviewers:[
        {
          name:"sam",
          noOfInterviewsTaken:18
        },
        {
         name:"tori",
         noOfInterviewsTaken:6
       },
       {
        name:"shane",
        noOfInterviewsTaken:6
      }
      ]
    }
  ] 

  constructor() { }

  ngOnInit() {
  }

}
