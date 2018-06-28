import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { RegistrationModule } from "./registration/registration.module";
import { AdminModule } from "./admin/admin.module";
import { InterviewerModule } from "./interviewer/interviewer.module";
import { ReactiveFormsModule} from '@angular/forms';
import { CommonislotModule } from './commonislot/commonislot.module';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    CommonislotModule,
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    AdminModule,
    InterviewerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
