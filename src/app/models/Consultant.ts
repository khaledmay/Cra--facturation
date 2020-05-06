import { ConsultantType } from '../enums/ConsultantType';

export class Consultant{

    public firstName : String;
    public lastName : String;
    public birthDate : Date;
    public mobileNumber : String;
    public mail : String;
    public consultantType : ConsultantType;
    
    constructor(firstName : String, lastName : String, birthDate : Date, mobileNumber : String, mail : String ,consultantType : ConsultantType){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthDate=birthDate;
        this.mobileNumber=mobileNumber;
        this.mail=mail;
        this.consultantType=consultantType;
    }

}