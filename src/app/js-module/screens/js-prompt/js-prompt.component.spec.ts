import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPromptComponent } from './js-prompt.component';

describe('JsPromptComponent', () => {
  let component: JsPromptComponent;
  let fixture: ComponentFixture<JsPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsPromptComponent]
    });
    fixture = TestBed.createComponent(JsPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
