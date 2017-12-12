import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrganizationListComponent } from './all-organization-list.component';

describe('AllOrganizationListComponent', () => {
  let component: AllOrganizationListComponent;
  let fixture: ComponentFixture<AllOrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrganizationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
