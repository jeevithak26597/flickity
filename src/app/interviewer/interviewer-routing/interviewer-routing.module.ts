import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

import { EventEnrollmentComponent } from "../pages/event-enrollment/event-enrollment.component";

const interviewroutes:Routes=[
  {path:'interviewer',children:[
  {path:'dashBoard',component:DashboardComponent},
{path:'eventenrollment',component:EventEnrollmentComponent}]},
{path:'',redirectTo:'interviewer/dashBoard',pathMatch:'full'}]
@NgModule({
  imports: [
    RouterModule.forChild(interviewroutes)
  ],
  declarations: []
})
export class InterviewerRoutingModule { }
