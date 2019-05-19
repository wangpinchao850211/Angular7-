import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComcomponentComponent } from './material-comcomponent.component';

describe('MaterialComcomponentComponent', () => {
  let component: MaterialComcomponentComponent;
  let fixture: ComponentFixture<MaterialComcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialComcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialComcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
