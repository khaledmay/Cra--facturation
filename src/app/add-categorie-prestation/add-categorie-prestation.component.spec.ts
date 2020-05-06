import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriePrestationComponent } from './add-categorie-prestation.component';

describe('AddCategoriePrestationComponent', () => {
  let component: AddCategoriePrestationComponent;
  let fixture: ComponentFixture<AddCategoriePrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoriePrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoriePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
