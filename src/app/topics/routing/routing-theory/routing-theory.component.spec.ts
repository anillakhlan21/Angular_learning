import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTheoryComponent } from './routing-theory.component';

describe('RoutingTheoryComponent', () => {
  let component: RoutingTheoryComponent;
  let fixture: ComponentFixture<RoutingTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
