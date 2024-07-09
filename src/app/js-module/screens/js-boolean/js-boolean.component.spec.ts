import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBooleanComponent } from './js-boolean.component';

describe('JsBooleanComponent', () => {
  let component: JsBooleanComponent;
  let fixture: ComponentFixture<JsBooleanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsBooleanComponent]
    });
    fixture = TestBed.createComponent(JsBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
