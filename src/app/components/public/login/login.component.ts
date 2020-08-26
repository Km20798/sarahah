import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  err:boolean = false;

  constructor(private us:UserService , private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.us.login(this.email , this.password).subscribe(data => {
      if(data){
        console.log(data);
      }else{
        this.err = true ;
        setTimeout(() => {
          this.err = false ;
        }, 3000);
      }
    });
  }

}
