import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsStatementexpressionsComponent } from './js-statementexpressions.component';

describe('JsStatementexpressionsComponent', () => {
  let component: JsStatementexpressionsComponent;
  let fixture: ComponentFixture<JsStatementexpressionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsStatementexpressionsComponent]
    });
    fixture = TestBed.createComponent(JsStatementexpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
