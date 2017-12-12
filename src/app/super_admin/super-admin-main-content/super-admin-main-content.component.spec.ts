import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminMainContentComponent } from './super-admin-main-content.component';

describe('SuperAdminMainContentComponent', () => {
  let component: SuperAdminMainContentComponent;
  let fixture: ComponentFixture<SuperAdminMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
