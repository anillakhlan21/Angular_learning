import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTheoryComponent } from './forms-theory.component';

describe('FormsTheoryComponent', () => {
  let component: FormsTheoryComponent;
  let fixture: ComponentFixture<FormsTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
