import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzuluyouOComponent } from './fuzuluyou-o.component';

describe('FuzuluyouOComponent', () => {
  let component: FuzuluyouOComponent;
  let fixture: ComponentFixture<FuzuluyouOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuzuluyouOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzuluyouOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
