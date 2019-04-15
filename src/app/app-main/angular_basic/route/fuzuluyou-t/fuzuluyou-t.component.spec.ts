import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzuluyouTComponent } from './fuzuluyou-t.component';

describe('FuzuluyouTComponent', () => {
  let component: FuzuluyouTComponent;
  let fixture: ComponentFixture<FuzuluyouTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuzuluyouTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzuluyouTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
