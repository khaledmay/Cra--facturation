export class User{

    public username : String;
   public password : String;
   public temporaryPassword : String;
   public newPassword : String;
    public accessToken : String;
    public email : String;
    public lastName : String;
    public name : String;
    public phoneNumber : String;
    public email_verified : Boolean;
    public companyPosition : String;



    constructor(username : String,  name : String,  accessToken : String,  lastName : String, phoneNumber : String, companyPosition : String, password : String, email :String, temporaryPassword : String, newPassword : String, email_verified : Boolean){
        this.username=username;
        this.name=name;
       this.password=password;
        this.temporaryPassword=temporaryPassword;
       this.newPassword=newPassword;
        this.accessToken=accessToken;
        this.email=email;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
       this.email_verified=email_verified;
        this.companyPosition=companyPosition;
    }

}