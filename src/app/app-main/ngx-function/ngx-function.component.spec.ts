import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFunctionComponent } from './ngx-function.component';

describe('NgxFunctionComponent', () => {
  let component: NgxFunctionComponent;
  let fixture: ComponentFixture<NgxFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
