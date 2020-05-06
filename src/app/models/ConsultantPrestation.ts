import { DecimalPipe } from '@angular/common';

export class ConsultantPrestation{


    public tarifHT : DecimalPipe;
    public dateAffectation : Date;
    
    
    constructor(tarifHT : DecimalPipe, dateAffectation : Date){
        this.tarifHT=tarifHT;
        this.dateAffectation=dateAffectation;
        
    }

}