import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventdisplayComponent } from './pages/eventdisplay/eventdisplay.component';
import { SkillManagementComponent } from './pages/skill-management/skill-management.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { EventCreationComponent } from './pages/event-creation/event-creation.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { InterviewerContactComponent } from './pages/interviewer-contact/interviewer-contact.component';
import { ReactiveFormsModule } from '@angular/forms' ;
import{FormsModule} from '@angular/forms';

import { EventService } from "./event.service";
import { EventtileComponent } from '../commonislot/pages/eventtile/eventtile.component';
import { CommonislotModule } from '../commonislot/commonislot.module';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
// import {Skill} from '../commonislot/classes/Skill';
// import {Events} from '../commonislot/classes/Events';
// import {Locations} from '../commonislot/classes/Location';
// import {User} from '../commonislot/classes/User';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule, MatCheckboxModule,
  // BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonislotModule,
    HttpClientModule,
    FormsModule
    // EventtileComponent
  ],
  providers:[EventService],
  declarations: [ DashboardComponent, EventdisplayComponent, SkillManagementComponent, LocationManagementComponent, EventCreationComponent, InterviewerContactComponent]
})
export class AdminModule { }
