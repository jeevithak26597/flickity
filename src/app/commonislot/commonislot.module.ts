import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeComponent } from './pages/change/change.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { UpdatedetailsComponent } from './pages/updatedetails/updatedetails.component';
import { EventtileComponent } from './pages/eventtile/eventtile.component';
import { MainheaderComponent } from './pages/mainheader/mainheader.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// import { Events } from "./classes/events";
// import { Locations } from "./classes/location";
//  import { User } from "./classes/user";
//  import { Skill } from "./classes/skill";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [ ChangeComponent, AnalysisComponent, UpdatedetailsComponent, EventtileComponent, MainheaderComponent],
  exports:[
    MainheaderComponent,
    EventtileComponent,
    // Events,
    // Locations,
    // Skill,
    //  User

  ]
})
export class CommonislotModule { }
