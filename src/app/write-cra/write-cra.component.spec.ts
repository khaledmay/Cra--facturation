import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCraComponent } from './write-cra.component';

describe('WriteCraComponent', () => {
  let component: WriteCraComponent;
  let fixture: ComponentFixture<WriteCraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteCraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
