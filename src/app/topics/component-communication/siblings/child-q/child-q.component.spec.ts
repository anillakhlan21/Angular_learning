import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildQComponent } from './child-q.component';

describe('ChildQComponent', () => {
  let component: ChildQComponent;
  let fixture: ComponentFixture<ChildQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
