import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosEditorComponent } from './heros-editor.component';

describe('HerosEditorComponent', () => {
  let component: HerosEditorComponent;
  let fixture: ComponentFixture<HerosEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
