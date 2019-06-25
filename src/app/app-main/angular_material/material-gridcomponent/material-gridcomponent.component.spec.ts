import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGridcomponentComponent } from './material-gridcomponent.component';

describe('MaterialGridcomponentComponent', () => {
  let component: MaterialGridcomponentComponent;
  let fixture: ComponentFixture<MaterialGridcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialGridcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGridcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
