import { TypeRecuperation } from '../enums/TypeRecuperation';

export class DetailsConsultantPrestation{

    public id : Array<String>;
    public idConsultantPrestation : String;
    public idConsultant : String;
    public creationDate : Date;
    public day : Array<String>;
    public hoursWork : Number;
    public approved : Boolean;
    public weekNum : Array<String>;
    public dayName : String;
    public typeRecuperation : TypeRecuperation ;
    
    constructor(id : Array<String>, idConsultantPrestation : String, idConsultant : String, creationDate : Date, day : Array<String> ,hoursWork : Number, approved : Boolean, weekNum : Array<String>, dayName : String, typeRecuperation : TypeRecuperation ){
        this.id=id;
        this.idConsultantPrestation=idConsultantPrestation;
        this.idConsultant=idConsultant;
        this.creationDate=creationDate;
        this.day=day;
        this.hoursWork=hoursWork;
        this.approved=approved;
        this.weekNum=weekNum;
        this.dayName=dayName;
        this.typeRecuperation=typeRecuperation;

    }

}