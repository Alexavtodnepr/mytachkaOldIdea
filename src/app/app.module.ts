import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainLayoutComponent } from './layouts/main-pages/main-layout/main-layout.component';
import { AboutComponent } from './layouts/main-pages/about/about.component';
import { CalculatorsComponent } from './layouts/main-pages/calculators/calculators.component';
import { BusinessPageComponent } from './layouts/main-pages/business-page/business-page.component';
import { LoginComponent } from './layouts/main-pages/login/login.component';
import { ForUsersComponent } from './layouts/main-pages/for-users/for-users.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
    AboutComponent,
    CalculatorsComponent,
    BusinessPageComponent,
    LoginComponent,
    ForUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
