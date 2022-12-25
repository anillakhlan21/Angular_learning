import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCaseDirectiveComponent } from './ng-switch-case-directive.component';

describe('NgSwitchCaseDirectiveComponent', () => {
  let component: NgSwitchCaseDirectiveComponent;
  let fixture: ComponentFixture<NgSwitchCaseDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchCaseDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchCaseDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
