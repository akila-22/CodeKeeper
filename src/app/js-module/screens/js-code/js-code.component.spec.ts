import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCodeComponent } from './js-code.component';

describe('JsCodeComponent', () => {
  let component: JsCodeComponent;
  let fixture: ComponentFixture<JsCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsCodeComponent]
    });
    fixture = TestBed.createComponent(JsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
