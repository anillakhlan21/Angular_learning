import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoParentChildRelationComponent } from './no-parent-child-relation.component';

describe('NoParentChildRelationComponent', () => {
  let component: NoParentChildRelationComponent;
  let fixture: ComponentFixture<NoParentChildRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoParentChildRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoParentChildRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
