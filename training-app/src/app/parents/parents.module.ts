import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { ChildModule } from 'src/libs';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Parent1Component,
    Parent2Component
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    ChildModule,
    FormsModule
  ]
})
export class ParentsModule { }
