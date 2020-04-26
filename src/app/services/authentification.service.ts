import { Auth } from 'aws-amplify';
import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})
export class AuthentificationService {

    private isAuthenticated : boolean;
    private currentUser: string;
  
    singUpToAWS(email: HTMLInputElement,contactNo: HTMLInputElement,username: HTMLInputElement,password: HTMLInputElement) : Promise<any | any> {
      
      this.currentUser = username.value;
  
      const user = {
        username: username.value,
        password: password.value,
        attributes: {
            email: email.value,       
            phone_number: contactNo.value,
        }
      }
  
      return Auth.signUp(user);
    }
  
    onVerify(verifycode: HTMLInputElement) : Promise<any | any>{
      return Auth.confirmSignUp(this.currentUser, verifycode.value, { forceAliasCreation: true });
    }
  
    signInToAWS(username: string, password: string ) : Promise<any | any> {
      const authInfo = {
        username: username,
        password: password
      }
      this.currentUser = username;

      return Auth.signIn(authInfo);
    }

    signOut(){
      Auth.signOut().then(() => {
        this.isAuthenticated=false;
      })
        .catch(err => console.log(err));
    }

    public getCurrentUser(): string {
        return this.currentUser;
    }

    public getAuthentificationStatus(): boolean {
        return this.isAuthenticated;
    }

    public setAuthentificationStatus(status: boolean) : void {
      this.isAuthenticated=status;
    }

        
}
