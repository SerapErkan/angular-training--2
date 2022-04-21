import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home/home.component';
import { HighlightDirective } from 'src/libs';

const routers: Routes = [
  {
    path:"",
    component:DirectivesComponent
  },
]



@NgModule({
  declarations: [
    DirectivesComponent,HighlightDirective
  ],
  imports: [
    CommonModule,RouterModule.forChild(routers) , FormsModule
  ]
})
export class DirectivesModule { }
