import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTheoryComponent } from './service-theory.component';

describe('ServiceTheoryComponent', () => {
  let component: ServiceTheoryComponent;
  let fixture: ComponentFixture<ServiceTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
