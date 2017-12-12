import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminLeftSidenavComponent } from './super-admin-left-sidenav.component';

describe('SuperAdminLeftSidenavComponent', () => {
  let component: SuperAdminLeftSidenavComponent;
  let fixture: ComponentFixture<SuperAdminLeftSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminLeftSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminLeftSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
