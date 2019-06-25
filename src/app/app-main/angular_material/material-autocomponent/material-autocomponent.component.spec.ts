import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAutocomponentComponent } from './material-autocomponent.component';

describe('MaterialAutocomponentComponent', () => {
  let component: MaterialAutocomponentComponent;
  let fixture: ComponentFixture<MaterialAutocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialAutocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAutocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
