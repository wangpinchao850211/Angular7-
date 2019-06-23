import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarterialDialogComponent } from './marterial-dialog.component';

describe('MarterialDialogComponent', () => {
  let component: MarterialDialogComponent;
  let fixture: ComponentFixture<MarterialDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarterialDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
