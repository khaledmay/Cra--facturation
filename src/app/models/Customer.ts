export class Customer{

    public denomination : String;
    public juridiqueStatus : String;
    public responsableManager : String;
    public siret : String;
    public tva : String;
    public campany : String;
    
    constructor(denomination : String, juridiqueStatus : String, responsableManager : String, siret : String, tva : String ,campany : String){
        this.denomination=denomination;
        this.juridiqueStatus=juridiqueStatus;
        this.responsableManager=responsableManager;
        this.siret=siret;
        this.tva=tva;
        this.campany=campany;
    }

}