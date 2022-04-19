import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
