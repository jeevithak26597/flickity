import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from "../../newmodel/events";

@Component({
  selector: 'app-eventtile',
  templateUrl: './eventtile.component.html',
  styleUrls: ['./eventtile.component.css']
})
export class EventtileComponent implements OnInit {
@Input() eventInfo:EventModel
  constructor() { }

  ngOnInit() {
  }

}
