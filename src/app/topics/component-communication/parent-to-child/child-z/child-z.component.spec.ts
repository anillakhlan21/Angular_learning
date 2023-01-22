import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildZComponent } from './child-z.component';

describe('ChildZComponent', () => {
  let component: ChildZComponent;
  let fixture: ComponentFixture<ChildZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
