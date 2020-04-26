import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';
import { DayWorked } from '../enums/DayWorked';
import { DayName } from '../models/DayName';

@Component({
  selector: 'app-write-cra',
  templateUrl: './write-cra.component.html',
  styleUrls: ['./write-cra.component.css']
})
export class WriteCraComponent implements OnInit {
  
  year: number;
  month: number;
  currentMonth: string;
  private days: DayName[];
  constructor(private dateService: DateService) { 
    this.year=this.dateService.getCurrentDate().getFullYear();
    this.month=this.dateService.getCurrentDate().getUTCMonth();
    this.days=this.dateService.generateDates(this.month,this.year);
    let month=this.month+1;
    if(month<10)
      this.currentMonth=this.year+"-0"+month;
    else
      this.currentMonth=this.year+"-"+month;
  }

  ngOnInit(): void {

  }

  public getDays(): DayName[]{
    return this.days;
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

  selectMonth (month:HTMLInputElement){
    this.currentMonth=month.value;
    this.month=parseInt(month.value.substring(5,7))-1;
    this.days=this.dateService.generateDates(this.month,this.year);
  }

  }

