/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgAfteViewInitComponent } from './ngAfteViewInit.component';

describe('NgAfteViewInitComponent', () => {
  let component: NgAfteViewInitComponent;
  let fixture: ComponentFixture<NgAfteViewInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAfteViewInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfteViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
