import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentPropertyBindingComponent } from './child-component-property-binding.component';

describe('ChildComponentPropertyBindingComponent', () => {
  let component: ChildComponentPropertyBindingComponent;
  let fixture: ComponentFixture<ChildComponentPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
