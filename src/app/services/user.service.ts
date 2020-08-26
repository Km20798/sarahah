import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[
    {name:"Karim Mohamed" , username:"Karim@Sarahah.com" , email:"kmaged207@gmail.com" , password:"kokokoko"},
    {name:"Mustafa Mohamed" , username:"Mustafa@Sarahah.com" , email:"mustafa@gmail.com" , password:"kokokoko"}
  ];

  constructor(private router:Router) { }

  // login method
  login(email:string , password:string):Observable<User>{
    var user:User;
    this.users.forEach(element => {
      if(element.email === email && element.password === password){
        sessionStorage.setItem("user" , element.email);
        user = element ;
        this.router.navigate(['/home/messages']);
      }
    });
    return of(user);
  }

  // add method
  addNewUser(user:User):Observable<User[]>{
    this.users.push(user)
    return of(this.users);
  }

  // find User
  getUser(email:string):Observable<User>{
    var user:User;
    this.users.forEach(element => {
      if(element.email === email){
        user = element ;
      }
    });
    return of(user);
  }  

  // delete User
  deleteUser(email:string):Observable<User[]>{
    for(var i = 0 ; i < this.users.length ;  i ++){
      if(this.users[i].email === email){
        this.users.splice(i , 1);
      }
    }
    return of(this.users);
  }

  // update User
  updateUser(email:string , user:User):Observable<User>{
    this.deleteUser(email).subscribe(data => {
      this.addNewUser(user).subscribe(users => {
        console.log(users);
      });
    });
    return of(user);
  }

}
