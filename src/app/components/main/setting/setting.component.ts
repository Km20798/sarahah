import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  personal:boolean = true;
  password:boolean = false;
  removeAccount:boolean = false;
  user:User;
  currentPassword:string="";
  newPassword:string="";
  confirmPassword:string="";

  constructor(private router:Router , private us:UserService) { }

  ngOnInit(): void {
    this.getUser(sessionStorage.getItem("user"));
  }

  getPersonal(){
    this.personal = true ;
    this.password = false ;
    this.removeAccount = false ;
  }

  getPassword(){
    this.personal = false ;
    this.password = true;
    this.removeAccount = false ;
  }
  getRemove(){
    this.removeAccount = true ;
    this.personal = false ;
    this.password = false ;
  }
  
  getMessage(){
    this.removeAccount = false ;
    this.personal = false ;
    this.password = false ;
    this.router.navigate(['/home/messages']);
  }

  getUser(email:string){
    this.us.getUser(email).subscribe(data => {
      this.user = data ;
    });
  }

  deleteUser(){
    this.us.deleteUser(sessionStorage.getItem("user")).subscribe(data => {
      this.router.navigate(['/']);
    })
  }

  updateUser(){
    this.us.updateUser(sessionStorage.getItem("user") , this.user).subscribe(data => {
      alert("update done");
    })
  }

  changePassword(){
    if(this.user.password === this.currentPassword){
      if(this.newPassword === this.confirmPassword){
        this.user.password = this.newPassword ;
        this.updateUser();
      }
    }
    
  }

}
