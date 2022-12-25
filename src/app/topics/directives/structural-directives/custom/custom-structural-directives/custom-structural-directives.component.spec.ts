import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructuralDirectivesComponent } from './custom-structural-directives.component';

describe('CustomStructuralDirectivesComponent', () => {
  let component: CustomStructuralDirectivesComponent;
  let fixture: ComponentFixture<CustomStructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStructuralDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
