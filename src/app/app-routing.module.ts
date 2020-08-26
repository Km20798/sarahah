import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './components/public/first-page/first-page.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { ContactUsComponent } from './components/public/contact-us/contact-us.component';
import { MainComponent } from './components/main/main.component';
import { MessagesComponent } from './components/main/messages/messages.component';
import { SettingComponent } from './components/main/setting/setting.component';
import { AboutComponent } from './components/main/about/about.component';
import { ContactComponent } from './components/main/contact/contact.component';


const routes: Routes = [
  {path:"" , component:FirstPageComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"about" , component:AboutUsComponent},
  {path:"contact" , component:ContactUsComponent},
  {path:"home" , component:MainComponent , children:[
    {path:"messages" , component:MessagesComponent },
    {path:"settings" , component:SettingComponent},
    {path:"about" , component:AboutComponent},
    {path:"contact" , component:ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
