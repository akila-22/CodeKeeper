import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTruthyfalsyComponent } from './js-truthyfalsy.component';

describe('JsTruthyfalsyComponent', () => {
  let component: JsTruthyfalsyComponent;
  let fixture: ComponentFixture<JsTruthyfalsyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsTruthyfalsyComponent]
    });
    fixture = TestBed.createComponent(JsTruthyfalsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
