import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsProject01Component } from './js-project01.component';

describe('JsProject01Component', () => {
  let component: JsProject01Component;
  let fixture: ComponentFixture<JsProject01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsProject01Component]
    });
    fixture = TestBed.createComponent(JsProject01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
