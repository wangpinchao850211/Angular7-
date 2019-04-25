import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainLayoutComponent } from './chain-layout.component';

describe('ChainLayoutComponent', () => {
  let component: ChainLayoutComponent;
  let fixture: ComponentFixture<ChainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
