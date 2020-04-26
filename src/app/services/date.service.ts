import { Injectable } from '@angular/core';
import { formatDate} from '@angular/common';
import { DayName } from '../models/DayName';

@Injectable({providedIn : 'root'})
export class DateService {

private currentDate : Date;

constructor(){
    this.currentDate = new Date();
}

getDayName(dateStr : string, locale : string) : string
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

getMonthName(dateStr : string, locale : string) : string
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { month: 'long' });        
}

 getdaysNumberInMonth () : number {
    return new Date().getDate();
}

public getCurrentDate():Date {
    return this.currentDate;
}

public getMonthDaysNumber(month : number,year : number): Number{
    let daysNumber : Number;
    if((month>0)&&(month<=12))
    {
       if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
       daysNumber=31;
     else {
       if(month==4 || month==6 || month==9 || month==11)
       daysNumber=30;
       else
       {
         if(year%4==0)
         daysNumber=29;
         else
         daysNumber=28;
       }
     }
    }
     return daysNumber;
}

public generateDates(month : number,year : number): DayName[] {

    let daysNumber=this.getMonthDaysNumber(month+1,year);
    let days=[];
    let date:String;
    let dayName:String;
    for(var i=1;i<=daysNumber;i++)
     {
        date=formatDate(new Date(year,month,i), 'dd/MM/yyyy', 'en');
        dayName=this.getDayName(formatDate(new Date(year,month,i), 'MM/dd/yyyy', 'en'),"en");
        days.push(new DayName(date,dayName));
     }
    return days;
}


}