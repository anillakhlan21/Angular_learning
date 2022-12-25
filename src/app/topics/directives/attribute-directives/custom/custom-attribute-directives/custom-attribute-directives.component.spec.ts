import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeDirectivesComponent } from './custom-attribute-directives.component';

describe('CustomAttributeDirectivesComponent', () => {
  let component: CustomAttributeDirectivesComponent;
  let fixture: ComponentFixture<CustomAttributeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAttributeDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
