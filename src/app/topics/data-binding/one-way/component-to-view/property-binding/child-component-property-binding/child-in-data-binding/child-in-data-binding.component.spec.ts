import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInDataBindingComponent } from './child-in-data-binding.component';

describe('ChildInDataBindingComponent', () => {
  let component: ChildInDataBindingComponent;
  let fixture: ComponentFixture<ChildInDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
