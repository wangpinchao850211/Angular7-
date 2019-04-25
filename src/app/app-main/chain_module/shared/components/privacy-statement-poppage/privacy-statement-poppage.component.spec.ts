import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyStatementPoppageComponent } from './privacy-statement-poppage.component';

describe('PrivacyStatementPoppageComponent', () => {
  let component: PrivacyStatementPoppageComponent;
  let fixture: ComponentFixture<PrivacyStatementPoppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyStatementPoppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyStatementPoppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
