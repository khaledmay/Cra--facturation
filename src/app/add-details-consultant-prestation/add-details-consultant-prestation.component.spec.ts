import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsConsultantPrestationComponent } from './add-details-consultant-prestation.component';

describe('AddDetailsConsultantPrestationComponent', () => {
  let component: AddDetailsConsultantPrestationComponent;
  let fixture: ComponentFixture<AddDetailsConsultantPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailsConsultantPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailsConsultantPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
