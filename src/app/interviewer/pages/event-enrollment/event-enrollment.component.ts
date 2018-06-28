import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-enrollment',
  templateUrl: './event-enrollment.component.html',
  styleUrls: ['./event-enrollment.component.css']
})
export class EventEnrollmentComponent implements OnInit {
 @Input() value:number=0;
  constructor() { }

  ngOnInit() {
  }
automatic():void{
++this.value;
}

}
