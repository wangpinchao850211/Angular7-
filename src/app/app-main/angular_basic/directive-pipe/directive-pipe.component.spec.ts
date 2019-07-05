import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePipeComponent } from './directive-pipe.component';

describe('DirectivePipeComponent', () => {
  let component: DirectivePipeComponent;
  let fixture: ComponentFixture<DirectivePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
