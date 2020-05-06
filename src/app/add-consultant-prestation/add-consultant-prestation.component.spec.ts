import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultantPrestationComponent } from './add-consultant-prestation.component';

describe('AddConsultantPrestationComponent', () => {
  let component: AddConsultantPrestationComponent;
  let fixture: ComponentFixture<AddConsultantPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsultantPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultantPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
