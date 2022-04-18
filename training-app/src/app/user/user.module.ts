import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRoleComponent } from './user/user-role/user-role.component';
import { RouterModule, Routes } from '@angular/router';

const routers: Routes = [


  {
    path: "", component: UserListComponent
  },
  {
    path: ":id",
    component: UserComponent,
    children: [
      { path: "details", component: UserDetailComponent },
      { path: "role", component: UserRoleComponent },
      { path: "", redirectTo: "details", pathMatch: "full"}
    ]
  },


]


//redirectTo :yölendirme 
//pathMatch:tam adres

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    UserDetailComponent,
    UserRoleComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routers) //forchild()
  ]
})
export class UserModule { }
