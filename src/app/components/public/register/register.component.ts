import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password:string;
  user:User={name:"" , username:"" , email:"" , password:""};
  

  constructor(private us:UserService , private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.user.password === this.password){
      this.user.username = this.user.username + "@Sarahah.com"
      this.us.addNewUser(this.user).subscribe(data => {
        console.log(data);
        this.router.navigate(['/login']);
      });
    }
    
  }

}
