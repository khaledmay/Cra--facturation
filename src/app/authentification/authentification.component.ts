import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { FormGroup , FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
  userVerified= false;
  signstatus = 'signin';
  account=new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(4)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor( private route: Router,
               private authentificationService : AuthentificationService ) { }

  ngOnInit() {
  }

  onSignUp() {
    this.signstatus="signup";
  }

  onSignIn() {
    this.signstatus="signin";
  }

  public getCurrentUser(): string {
      return this.authentificationService.getCurrentUser();
  }

  public isAuthentified(): boolean {
    return this.authentificationService.getAuthentificationStatus();
  }

  signInToAWS() {
      this.authentificationService.signInToAWS(this.account.get('username').value,this.account.get('password').value).then(user => {
        this.authentificationService.setAuthentificationStatus(true);
        this.route.navigate(['/writeCra']);
        console.log(user);
      })
        .catch( err => {
          this.account.setErrors({
            invalidLogin:true
          });
          console.log(this.account);
          console.log(err)
        });         
  }

  onVerify(verifycode: HTMLInputElement) {
    this.authentificationService.onVerify(verifycode)        
    .then(data => {
      console.log(data)
      this.userVerified = false;
    })
      .catch(err => console.log(err));
    this.signstatus="signin";
  }

  singUpToAWS(email: HTMLInputElement,contactNo: HTMLInputElement,username: HTMLInputElement,password: HTMLInputElement) {
    this.authentificationService.singUpToAWS(email,contactNo,username,password).then(data => {
      console.log(data);
      this.userVerified = true;
    })
    .catch(err => console.log(err));
  }

  get username(){
    return this.account.get('username');
  }

  get password(){
    return this.account.get('password');
  }


}

