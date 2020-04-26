import { DayWorked } from '../enums/DayWorked';

export class DayName{
public date:String;
public dayName:String;
public dayWorked:DayWorked;
public hoursWorked:Number;

constructor(date:String,dayName:String){
    this.date=date;
    this.dayName=dayName;
    this.dayWorked=DayWorked.CRM;
    this.hoursWorked=8;
}

}