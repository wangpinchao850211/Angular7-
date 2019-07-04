import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularScssComponent } from './angular-scss.component';

describe('AngularScssComponent', () => {
  let component: AngularScssComponent;
  let fixture: ComponentFixture<AngularScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
