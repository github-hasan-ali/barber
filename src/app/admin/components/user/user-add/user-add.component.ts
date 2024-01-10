import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { UserForCreateDto } from '../../../../dtos/user-for-create-dto';


@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent implements OnInit{
  addUserForm!:FormGroup
  user!:User


  constructor(
    private formbuilder:FormBuilder,
    private userService:UserService
    ){}
  ngOnInit(): void {
    this.createAddUserForm();
  }


  createAddUserForm(){
    this.addUserForm= this.formbuilder.group({
      imgUrl:[''],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  addLoginUser(){
    if(!this.addUserForm.valid) return;
    let newUser:UserForCreateDto=Object.assign(this.addUserForm.value,
      {
        createdAt:null,
        createdUser:null,
        updatedAt:null,
        updatedUser:null,
        isUpdated:null,
        deletedAt:null,
        deletedUser:null,
      });

      this.userService.addUser(newUser).subscribe(result=>{
      if(result.success) console.log("başarılı")
      else console.log("başarısız")
      console.log(result)

    })


  }
}
