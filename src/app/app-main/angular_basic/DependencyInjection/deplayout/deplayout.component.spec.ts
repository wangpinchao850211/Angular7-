import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplayoutComponent } from './deplayout.component';

describe('DeplayoutComponent', () => {
  let component: DeplayoutComponent;
  let fixture: ComponentFixture<DeplayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeplayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
