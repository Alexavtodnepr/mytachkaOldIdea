import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { UserComponent } from './user/user.component';
import {SidebarComponent} from "./sidebar/sidebar.component";



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: UserComponent},
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class UserModule { }
