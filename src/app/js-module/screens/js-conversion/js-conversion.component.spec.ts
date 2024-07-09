import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConversionComponent } from './js-conversion.component';

describe('JsConversionComponent', () => {
  let component: JsConversionComponent;
  let fixture: ComponentFixture<JsConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsConversionComponent]
    });
    fixture = TestBed.createComponent(JsConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
