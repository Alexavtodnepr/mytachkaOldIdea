import {NgModule, Provider} from '@angular/core';
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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './layouts/main-pages/register/register.component';
import {AuthInterceptor} from "./shared/auth.interceptor";
import {registerLocaleData} from "@angular/common";

let uaLocale;
registerLocaleData(uaLocale, 'ru-UA')


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

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
    RegisterComponent,
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
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
