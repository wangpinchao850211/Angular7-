import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorcomponentComponent } from './paginatorcomponent.component';

describe('PaginatorcomponentComponent', () => {
  let component: PaginatorcomponentComponent;
  let fixture: ComponentFixture<PaginatorcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
