import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHeaderComponent } from './components/public/public-header/public-header.component';
import { FirstPageComponent } from './components/public/first-page/first-page.component';
import { PublicFooterComponent } from './components/public/public-footer/public-footer.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { ContactUsComponent } from './components/public/contact-us/contact-us.component';
import { MainComponent } from './components/main/main.component';
import { MainHeaderComponent } from './components/main/main-header/main-header.component';
import { MainFooterComponent } from './components/main/main-footer/main-footer.component';
import { MessagesComponent } from './components/main/messages/messages.component';
import { SettingComponent } from './components/main/setting/setting.component';
import { AboutComponent } from './components/main/about/about.component';
import { ContactComponent } from './components/main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    FirstPageComponent,
    PublicFooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MessagesComponent,
    SettingComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
