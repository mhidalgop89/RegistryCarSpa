import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCarsComponent } from './view-cars/view-cars.component';
import { HttpClientModule } from '@angular/common/http';
import { SaveCarsComponent } from './save-cars/save-cars.component'
import { FormsModule }   from '@angular/forms';
import { GetCarsComponent } from './get-cars/get-cars.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ViewCarsComponent,
    SaveCarsComponent,
    GetCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
