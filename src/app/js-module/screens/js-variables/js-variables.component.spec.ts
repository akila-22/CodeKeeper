import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsVariablesComponent } from './js-variables.component';

describe('JsVariablesComponent', () => {
  let component: JsVariablesComponent;
  let fixture: ComponentFixture<JsVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsVariablesComponent]
    });
    fixture = TestBed.createComponent(JsVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
