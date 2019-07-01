import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTimepickerComponent } from './bs-timepicker.component';

describe('BsTimepickerComponent', () => {
  let component: BsTimepickerComponent;
  let fixture: ComponentFixture<BsTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
