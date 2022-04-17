// Spinner
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// ngx toastr
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //ng Toastr
    CommonModule ,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      //Options
      timeOut:4000,
      progressBar:true,
      easing:"ease-in",
      closeButton:true,
      progressAnimation:"increasing",
      preventDuplicates:true
    }),

    NgxSpinnerModule, //Spinner
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Spinner
})
export class AppModule { }
