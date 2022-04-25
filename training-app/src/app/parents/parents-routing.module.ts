import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';

const routes: Routes = [
  {
    path:"", children: [
      { path: "parent1", component: Parent1Component},
      { path: "parent2", component: Parent2Component  },
      {
        path:"",
        redirectTo:"parent1", pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
