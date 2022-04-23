import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
{path:"", component:PipesComponent}
]

@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ]
})
export class PipesModule { }
