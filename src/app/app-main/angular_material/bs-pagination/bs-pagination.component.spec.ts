import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPaginationComponent } from './bs-pagination.component';

describe('BsPaginationComponent', () => {
  let component: BsPaginationComponent;
  let fixture: ComponentFixture<BsPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
