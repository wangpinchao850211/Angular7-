import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimateComponent } from './angular-animate.component';

describe('AngularAnimateComponent', () => {
  let component: AngularAnimateComponent;
  let fixture: ComponentFixture<AngularAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
