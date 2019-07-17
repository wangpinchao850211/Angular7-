import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxBasicUsingComponent } from './ngrx-basic-using.component';

describe('NgrxBasicUsingComponent', () => {
  let component: NgrxBasicUsingComponent;
  let fixture: ComponentFixture<NgrxBasicUsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxBasicUsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxBasicUsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
