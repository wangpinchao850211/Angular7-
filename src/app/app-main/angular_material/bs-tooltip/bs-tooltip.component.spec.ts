import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTooltipComponent } from './bs-tooltip.component';

describe('BsTooltipComponent', () => {
  let component: BsTooltipComponent;
  let fixture: ComponentFixture<BsTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
