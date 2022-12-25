import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityHelperComponent } from './accessibility-helper.component';

describe('AccessibilityHelperComponent', () => {
  let component: AccessibilityHelperComponent;
  let fixture: ComponentFixture<AccessibilityHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
