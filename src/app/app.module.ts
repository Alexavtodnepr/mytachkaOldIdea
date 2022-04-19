import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './user-layout/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainLayoutComponent } from './layouts/main-pages/main-layout/main-layout.component';
import { AboutComponent } from './layouts/main-pages/about/about.component';
import { CalculatorsComponent } from './layouts/main-pages/calculators/calculators.component';
import { BusinessPageComponent } from './layouts/main-pages/business-page/business-page.component';
import { LoginComponent } from './layouts/main-pages/login/login.component';
import { ForUsersComponent } from './layouts/main-pages/for-users/for-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
// import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
// import {InMemoryWebApiService} from "./shared/services/in-memory-web-api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    ForUsersComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // HttpClientInMemoryWebApiModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
