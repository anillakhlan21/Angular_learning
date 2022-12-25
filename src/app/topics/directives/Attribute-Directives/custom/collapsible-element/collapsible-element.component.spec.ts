import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleElementComponent } from './collapsible-element.component';

describe('CollapsibleElementComponent', () => {
  let component: CollapsibleElementComponent;
  let fixture: ComponentFixture<CollapsibleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibleElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
