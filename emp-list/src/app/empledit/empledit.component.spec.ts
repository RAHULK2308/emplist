import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleditComponent } from './empledit.component';

describe('EmpleditComponent', () => {
  let component: EmpleditComponent;
  let fixture: ComponentFixture<EmpleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
