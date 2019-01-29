import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlugin2Component } from './my-plugin2.component';

describe('MyPlugin2Component', () => {
  let component: MyPlugin2Component;
  let fixture: ComponentFixture<MyPlugin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlugin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlugin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
