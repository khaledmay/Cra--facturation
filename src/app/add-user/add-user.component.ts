import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user=new FormGroup({
    username : new FormControl('', Validators.required),
    accessToken : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    name : new FormControl(''),
    email : new FormControl(''),
    lastName : new FormControl(''),
    phoneNumber : new FormControl(''),
    newPassword : new FormControl(''),
    temporaryPassword : new FormControl(''),
    email_verified : new FormControl(''),
    companyPosition : new FormControl('')
  
  });
  
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    addUser() : void {
      let user : User;
      if(this.username.status=="VALID" && this.accessToken.status=="VALID" && this.password.status=="VALID")
      {
        user=new User (this.username.value,this.accessToken.value,this.password.value,this.user.get('name').value,this.user.get('email').value,this.user.get('lastName').value,this.user.get('phoneNumber').value,this.user.get('companyPosition').value,this.user.get('temporaryPassword').value,this.user.get('newPassword').value,this.user.get('email_verified').value)
      }
      else
        this.user.setErrors({required: true});
    }
  
    public get username(){
      return this.user.get('username');
    }
    public get password(){
      return this.user.get('password');
    }
  
    public get accessToken(){
      return this.user.get('accessToken');
    }
  
  
  }