import {Component, OnInit} from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../service/user-service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [
    NgForOf
  ],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails implements  OnInit{

  users:User[] = [];

  constructor(private userService:UserService) {}

  ngOnInit():void
  {

    this.userService.getFilteredUsers().subscribe(
      {
        next: (data) => (this.users = data),
        error: (err) => console.error('API Error:',err)
      }
    );
  }
}
