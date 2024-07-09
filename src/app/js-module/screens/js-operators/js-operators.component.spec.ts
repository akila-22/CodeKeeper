import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsOperatorsComponent } from './js-operators.component';

describe('JsOperatorsComponent', () => {
  let component: JsOperatorsComponent;
  let fixture: ComponentFixture<JsOperatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsOperatorsComponent]
    });
    fixture = TestBed.createComponent(JsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
