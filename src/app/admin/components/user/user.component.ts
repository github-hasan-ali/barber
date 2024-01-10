import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {


  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.userService.getAll().subscribe(result => {
      this.users = result.data;
    });
  }
  getUserById(id:number){
    this.userService.getUserById(id).subscribe(result=>{
      console.log(result.data);
    });
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(result=>{
     this.getUserById(id);
    });
  }
}
