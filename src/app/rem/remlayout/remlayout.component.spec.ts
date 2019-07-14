import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemlayoutComponent } from './remlayout.component';

describe('RemlayoutComponent', () => {
  let component: RemlayoutComponent;
  let fixture: ComponentFixture<RemlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
