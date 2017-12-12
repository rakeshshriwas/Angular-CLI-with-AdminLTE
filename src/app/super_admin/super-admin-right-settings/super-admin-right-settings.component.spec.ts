import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminRightSettingsComponent } from './super-admin-right-settings.component';

describe('SuperAdminRightSettingsComponent', () => {
  let component: SuperAdminRightSettingsComponent;
  let fixture: ComponentFixture<SuperAdminRightSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminRightSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminRightSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
