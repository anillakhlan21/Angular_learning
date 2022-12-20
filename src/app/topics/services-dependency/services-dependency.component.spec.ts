import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDependencyComponent } from './services-dependency.component';

describe('ServicesDependencyComponent', () => {
  let component: ServicesDependencyComponent;
  let fixture: ComponentFixture<ServicesDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesDependencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
