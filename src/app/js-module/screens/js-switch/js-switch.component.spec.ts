import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSwitchComponent } from './js-switch.component';

describe('JsSwitchComponent', () => {
  let component: JsSwitchComponent;
  let fixture: ComponentFixture<JsSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsSwitchComponent]
    });
    fixture = TestBed.createComponent(JsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
