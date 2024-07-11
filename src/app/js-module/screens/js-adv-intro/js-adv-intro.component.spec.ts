import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsAdvIntroComponent } from './js-adv-intro.component';

describe('JsAdvIntroComponent', () => {
  let component: JsAdvIntroComponent;
  let fixture: ComponentFixture<JsAdvIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsAdvIntroComponent]
    });
    fixture = TestBed.createComponent(JsAdvIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
