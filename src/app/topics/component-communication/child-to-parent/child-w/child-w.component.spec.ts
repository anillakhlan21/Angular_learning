import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWComponent } from './child-w.component';

describe('ChildWComponent', () => {
  let component: ChildWComponent;
  let fixture: ComponentFixture<ChildWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
