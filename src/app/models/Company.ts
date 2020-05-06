import { CompanyType } from '../enums/CompanyType';


export class Company{

    public denomination : String;
    public companyType : CompanyType;
    
    constructor(denomination : String, companyType : CompanyType){
        this.denomination=denomination;
        this.companyType=companyType;
    

    }

}