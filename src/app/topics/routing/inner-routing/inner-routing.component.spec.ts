import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerRoutingComponent } from './inner-routing.component';

describe('InnerRoutingComponent', () => {
  let component: InnerRoutingComponent;
  let fixture: ComponentFixture<InnerRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
