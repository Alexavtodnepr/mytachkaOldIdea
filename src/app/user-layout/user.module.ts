import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { UserComponent } from './user/user.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MycarsComponent } from './mycars/mycars.component';
import { FuelGasComponent } from './fuel-gas/fuel-gas.component';
import { TechInspectComponent } from './tech-inspect/tech-inspect.component';
import { CarServiceComponent } from './car-service/car-service.component';
import { UserCalculateComponent } from './user-calculate/user-calculate.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { NotesComponent } from './notes/notes.component';
import { CallbackComponent } from './callback/callback.component';
import { SettingsComponent } from './settings/settings.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    UserComponent,
    UsersettingsComponent,
    UserprofileComponent,
    MycarsComponent,
    FuelGasComponent,
    TechInspectComponent,
    CarServiceComponent,
    UserCalculateComponent,
    CarInsuranceComponent,
    NotesComponent,
    CallbackComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UserComponent, children: [
          {path: 'userprofile', component: UserprofileComponent},
          {path: 'usersettings', component: UsersettingsComponent},
          {path: 'carservices', component: CarServiceComponent},
          {path: 'callback', component: CallbackComponent},
          {path: 'mycars', component: MycarsComponent},
          {path: 'usercalculate', component: UserCalculateComponent},
          {path: 'techinspect', component: TechInspectComponent},
          {path: 'fuelgas', component: FuelGasComponent},
          {path: 'notes', component: NotesComponent},
          {path: 'carinsurance', component: CarInsuranceComponent}
        ]
      },
    ]),
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [RouterModule],
  providers: []
})
export class UserModule { }
