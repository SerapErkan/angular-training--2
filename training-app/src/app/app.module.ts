// Spinner
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngx toastr
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { CookieService } from 'ngx-cookie-service';

import {
  IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule,
  IgxNavbarModule,
  IgxButtonModule,
  IgxIconModule
} from 'igniteui-angular';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //ng Toastr
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      //Options
      timeOut: 4000,
      progressBar: true,
      easing: "ease-in",
      closeButton: true,
      progressAnimation: "increasing",
      preventDuplicates: true
    }),

    NgxSpinnerModule,

    //ignite-UI
    IgxNavbarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
  
  ],

  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Spinner
})
export class AppModule {
}
