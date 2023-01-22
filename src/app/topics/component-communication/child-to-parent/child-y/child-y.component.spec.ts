import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildYComponent } from './child-y.component';

describe('ChildYComponent', () => {
  let component: ChildYComponent;
  let fixture: ComponentFixture<ChildYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
