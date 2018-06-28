import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interviewer-contact',
  templateUrl: './interviewer-contact.component.html',
  styleUrls: ['./interviewer-contact.component.css']
})
export class InterviewerContactComponent implements OnInit {
  @Input() contactInfo:IContact;
  constructor() { }

  ngOnInit() {
  }

}
export interface IContact{
  name:string;
  id:number;
  email:string;
  mobileNo:number;
 }