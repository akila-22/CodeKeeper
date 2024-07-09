import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTemplateliteralsComponent } from './js-templateliterals.component';

describe('JsTemplateliteralsComponent', () => {
  let component: JsTemplateliteralsComponent;
  let fixture: ComponentFixture<JsTemplateliteralsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsTemplateliteralsComponent]
    });
    fixture = TestBed.createComponent(JsTemplateliteralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
