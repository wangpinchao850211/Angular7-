import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresscomponentComponent } from './progresscomponent.component';

describe('ProgresscomponentComponent', () => {
  let component: ProgresscomponentComponent;
  let fixture: ComponentFixture<ProgresscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
