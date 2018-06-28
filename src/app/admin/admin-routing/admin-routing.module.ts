import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {DashboardComponent} from "../pages/dashboard/dashboard.component";
import { EventCreationComponent } from "../pages/event-creation/event-creation.component";
import { EventdisplayComponent } from "../pages/eventdisplay/eventdisplay.component";
import { LocationManagementComponent } from "../pages/location-management/location-management.component";
import { SkillManagementComponent } from "../pages/skill-management/skill-management.component";




const adminRoutes:Routes= [
  {path:'admin',children:[
  {path:'dashboard',component:DashboardComponent},
  {path:'eventcreation',component:EventCreationComponent},
  {path:'eventdisplay',component:EventdisplayComponent},
  {path:'location',component:LocationManagementComponent},
  {path:'skill',component:SkillManagementComponent}]},
  {path:'',redirectTo:'admin/dashboard',pathMatch:'full'}]
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
 
  ],
  exports:[
    RouterModule
  ],
 declarations :[]
})
export class AdminRoutingModule { }
