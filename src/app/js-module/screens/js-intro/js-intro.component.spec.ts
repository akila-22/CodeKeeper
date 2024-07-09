import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIntroComponent } from './js-intro.component';

describe('JsIntroComponent', () => {
  let component: JsIntroComponent;
  let fixture: ComponentFixture<JsIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsIntroComponent]
    });
    fixture = TestBed.createComponent(JsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
