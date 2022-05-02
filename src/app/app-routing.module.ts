import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-pages/main-layout/main-layout.component";
import {AboutComponent} from "./layouts/main-pages/about/about.component";
import {CalculatorsComponent} from "./layouts/main-pages/calculators/calculators.component";
import {BusinessPageComponent} from "./layouts/main-pages/business-page/business-page.component";
import {LoginComponent} from "./layouts/main-pages/login/login.component";
import {ForUsersComponent} from "./layouts/main-pages/for-users/for-users.component";
import {UserModule} from "./user-layout/user.module";
import {UserComponent} from "./user-layout/user/user.component";
import {AuthGuard} from "./shared/auth.guard";
import {RegisterComponent} from "./layouts/main-pages/register/register.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ]},
  {path: 'about', component: AboutComponent},
  {path: 'calculators', component: CalculatorsComponent},
  {path: 'business', component: BusinessPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forusers', component: ForUsersComponent},
  {path: 'admin', canActivate:[AuthGuard],loadChildren: () => import ('./admin-layout/admin.module').then(m => m.AdminModule)},
  {path: 'user', canActivate:[AuthGuard],loadChildren: () => import ('./user-layout/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
