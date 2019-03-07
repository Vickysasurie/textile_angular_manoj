import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Controller2Component } from './controller2.component';

describe('Controller2Component', () => {
  let component: Controller2Component;
  let fixture: ComponentFixture<Controller2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Controller2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Controller2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
