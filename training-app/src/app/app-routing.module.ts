import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

// import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },

  /* //tek modulde yönetmek zor oldugu için usermodulden yönetelim 

   {
     path:"user" , component:UserComponent

    }
    
  */
  {
    path: "user", loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "data-binding", loadChildren: () => import("./data-binding/data-binding.module").then(m => m.DataBindingModule)
  },
  {
    path: "storage", loadChildren: () => import("./storage/storage.module").then(m => m.StorageModule)
  },
  {
    path: "directives", loadChildren: () => import("./directives/directives.module").then(m => m.DirectivesModule)
  },
  {
    path: "pipes", loadChildren: () => import("./pipes/pipes.module").then(m => m.PipesModule)
  },
  {
    path: "**",
    component: HomeComponent
  }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
