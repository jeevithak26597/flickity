import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventEnrollmentComponent } from './pages/event-enrollment/event-enrollment.component';
import { InterviewerRoutingModule } from './interviewer-routing/interviewer-routing.module';
import { Routes, RouterModule } from "@angular/router";
// import {Skill} from '../commonislot/classes/Skill';
// import {Events} from '../commonislot/classes/Events';
// import {Locations} from '../commonislot/classes/Location';
// import {User} from '../commonislot/classes/User';
const introutes: Routes = [
  {path:'event-enrollment',component:EventEnrollmentComponent}
]

@NgModule({
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    // Events,
    // Skill,
    // Locations,
    // User,
    RouterModule.forChild(introutes)
  ],
  declarations: [DashboardComponent, EventEnrollmentComponent]
})
export class InterviewerModule { }
