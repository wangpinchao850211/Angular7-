import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodashboardComponent } from './herodashboard.component';

describe('HerodashboardComponent', () => {
  let component: HerodashboardComponent;
  let fixture: ComponentFixture<HerodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
