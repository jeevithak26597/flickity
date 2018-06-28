import { NgModule } from '@angular/core';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from "@angular/router";
import { RegistrationRoutingModule } from "./registration-routing/registration-routing.module";
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { CommonislotModule } from "../commonislot/commonislot.module";
import { ServiceregisterService } from "./serviceregister.service";
import { InterviewerregiserComponent } from './pages/interviewerregiser/interviewerregiser.component';
// import { BrowserModule } from '@angular/platform-browser';
// import {Skill} from '../commonislot/classes/Skill';
// import {Events} from '../commonislot/classes/Events';
// import {Locations} from '../commonislot/classes/Location';
// import {User} from '../commonislot/classes/User';

@NgModule({
  imports: [
    RouterModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    CommonislotModule,
    CommonModule
    // Locations,User,Skill,Events
  ],
  declarations: [LoginComponent, RegisterComponent, InterviewerregiserComponent],
  providers:[ServiceregisterService]
})
export class RegistrationModule { }
