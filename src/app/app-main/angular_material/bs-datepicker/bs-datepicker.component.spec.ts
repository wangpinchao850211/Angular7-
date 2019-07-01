import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDatepickerComponent } from './bs-datepicker.component';

describe('BsDatepickerComponent', () => {
  let component: BsDatepickerComponent;
  let fixture: ComponentFixture<BsDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
