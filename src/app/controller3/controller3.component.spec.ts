import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Controller3Component } from './controller3.component';

describe('Controller3Component', () => {
  let component: Controller3Component;
  let fixture: ComponentFixture<Controller3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Controller3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Controller3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
