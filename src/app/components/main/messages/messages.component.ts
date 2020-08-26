import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  show:boolean=true;
  user:User

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  showDialog(){
    this.show = !this.show;
  }

  getUser(){
    this.us.getUser(sessionStorage.getItem("user")).subscribe(data => {
      this.user = data;
    })  
  }

}
