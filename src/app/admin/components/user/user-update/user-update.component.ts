import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { UserForUpdateDto } from '../../../../dtos/user-for-update-dto';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent {
  updateUserForm!:FormGroup

  constructor(
    private formbuilder:FormBuilder,
    private userService:UserService,
    private router:Router
    ){}
  ngOnInit(): void {
    this.createUpdateUserForm();
  }


  createUpdateUserForm(){
    this.updateUserForm = this.formbuilder.group({
      id:['',Validators.required],
      imageUrl:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
    })
  }

  updateUser(){
    if(!this.updateUserForm.valid) return;
    let updateUser:UserForUpdateDto=Object.assign(this.updateUserForm.value);

    this.userService.updateUser(updateUser).subscribe(result=>{
      console.log(result);
      this.router.navigateByUrl("/admin/users")
    })
  }
}
