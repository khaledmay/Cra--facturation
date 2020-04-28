import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { DateService } from '../services/date.service';
import { DayName } from '../models/DayName';

@Component({
  selector: 'app-write-cra',
  templateUrl: './write-cra.component.html',
  styleUrls: ['./write-cra.component.css']
})

export class WriteCraComponent implements OnInit {
  
  private year: number;
  private month: number;
  private currentMonth: string;
  private firstHalf: DayName[]=[];
  private secondHalf: DayName[]=[];
  private days: DayName[];

  @Output('change') change = new EventEmitter();
  constructor(private dateService: DateService) { 
    this.year=this.dateService.getCurrentDate().getFullYear();
    this.month=this.dateService.getCurrentDate().getUTCMonth();
    this.days=this.dateService.generateDates(this.month,this.year);
    let month=this.month+1;
    if(month<10)
      this.currentMonth=this.year+"-0"+month;
    else
      this.currentMonth=this.year+"-"+month;
      for(var i=0;i<this.days.length/2;i++){
        this.firstHalf.push(this.days[i]);
      }
      for(var i=this.days.length/2;i<this.days.length;i++){
        this.secondHalf.push(this.days[i]);
      }
  }

  ngOnInit(): void {

  }

  public get FirstHalf(): DayName[]{
    return this.firstHalf;
  }

  public get SecondHalf(): DayName[]{
    return this.secondHalf;
  }

  selectMonth (month:HTMLInputElement){
    this.currentMonth=month.value;
    this.month=parseInt(month.value.substring(5,7))-1;
    this.days=this.dateService.generateDates(this.month,this.year);
  }

  confirmCra(): void{
    console.log(this.days);
  }

  public get CurrentMonth():string {
    return this.currentMonth;
  }

  }

