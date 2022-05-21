import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    FormsModule,//ekle
    ReactiveFormsModule // ekle
  ]
})
export class ReactiveFormModule { }
