import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';
import { TileComponent } from './tile/tile.component';
import { CommonService } from './common.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingPagesComponent,
    TileComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
