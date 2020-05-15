import { Component, ChangeDetectorRef, AfterViewChecked, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { AuthentificationService } from './services/authentification.service';
import { DateService } from './services/date.service';
import { formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  isAuthenticated=false ;
  title = 'craProject';
  currentUser : string ;
  currentDate : string;

  constructor(
    private authentificationService: AuthentificationService,
    private dateService: DateService,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document)
    {
    this.currentDate = formatDate(dateService.getCurrentDate(), 'dd/MM/yyyy', 'en');
    }

    ngOnInit() {
      this.document.body.classList.add('bg-image');
    }

    ngOnDestroy(): void {
      this.document.body.classList.remove('bg-image');
    }

  ngAfterViewChecked(): void {
    if (this.isAuthenticated != this.authentificationService.getAuthentificationStatus()) {
      this.isAuthenticated = this.authentificationService.getAuthentificationStatus();
      this.currentUser = this.authentificationService.getCurrentUser();
      this.changeDetectorRef.detectChanges();
    }
  }


  logout(): void {
    this.authentificationService.signOut();
    var days:Date[];
    const year=this.dateService.getCurrentDate().getFullYear();
    const month=this.dateService.getCurrentDate().getMonth();
    const daysNumber=this.dateService.getdaysNumberInMonth();
    for(var i = 0; i < daysNumber; i++)
    {
      days.push(new Date(year,month,i));
    }
    console.log(days);

  }


}
