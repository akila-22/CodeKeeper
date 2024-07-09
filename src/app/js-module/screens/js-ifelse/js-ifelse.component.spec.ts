import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIfelseComponent } from './js-ifelse.component';

describe('JsIfelseComponent', () => {
  let component: JsIfelseComponent;
  let fixture: ComponentFixture<JsIfelseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsIfelseComponent]
    });
    fixture = TestBed.createComponent(JsIfelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
