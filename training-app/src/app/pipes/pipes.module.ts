import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyFilteringPipePipe, TlPipe } from 'src/libs';


const routes:Routes = [
{path:"", component:PipesComponent}
]

@NgModule({
  declarations: [
    PipesComponent,TlPipe,MyFilteringPipePipe
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ]
})
export class PipesModule { }
