import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosmessagesComponent } from './herosmessages.component';

describe('HerosmessagesComponent', () => {
  let component: HerosmessagesComponent;
  let fixture: ComponentFixture<HerosmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
