import { Component, OnInit, Input } from '@angular/core';
import { DayName } from '../models/DayName';
import { DayWorked } from '../enums/DayWorked';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @Input()  dates : DayName[];

  constructor() { 
  }

  ngOnInit(): void {
  }

  public changeHoursWorked(day:DayName,hoursWorked:HTMLInputElement):void {
    day.hoursWorked=parseInt(hoursWorked.value);
  }

  
  public changeDayWorked(day:DayName,choice:String):void{
    switch(choice){
      case "CP" : day.dayWorked=DayWorked.CP;
      break;
      case "RTT" : day.dayWorked=DayWorked.RTT;
      break;
      case "CRM" : day.dayWorked=DayWorked.CRM;
      break;
      default : day.dayWorked=DayWorked.CRM;
    }
  }

}