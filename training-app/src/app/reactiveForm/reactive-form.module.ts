import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserService } from 'src/libs/services/user.service';
@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    FormsModule,//ekle
    ReactiveFormsModule // ekle
  ],
  providers:[UserService]
  
})
export class ReactiveFormModule { }
