import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCommentsComponent } from './js-comments.component';

describe('JsCommentsComponent', () => {
  let component: JsCommentsComponent;
  let fixture: ComponentFixture<JsCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsCommentsComponent]
    });
    fixture = TestBed.createComponent(JsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
