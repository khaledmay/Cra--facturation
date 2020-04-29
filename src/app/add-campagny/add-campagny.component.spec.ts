import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampagnyComponent } from './add-campagny.component';

describe('AddCampagnyComponent', () => {
  let component: AddCampagnyComponent;
  let fixture: ComponentFixture<AddCampagnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampagnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampagnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
