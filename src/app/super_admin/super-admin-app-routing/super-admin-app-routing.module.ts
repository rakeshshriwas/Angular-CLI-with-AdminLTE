import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { RouterLinkActive } from '@angular/router';

import { SuperAdminDashboardComponent } from '../../super_admin/super-admin-dashboard/super-admin-dashboard.component';
import { CreateOrganizationComponent } from '../../super_admin/organization/create-organization/create-organization.component';
import { AllOrganizationListComponent } from '../../super_admin/organization/all-organization-list/all-organization-list.component'

const routes: Routes = [
	{ path: '', redirectTo: '/superadmindashboard', pathMatch: 'full' },
	{ path: 'superadmindashboard', component: SuperAdminDashboardComponent },
	{ path: 'createorg', component: CreateOrganizationComponent},
	{ path: 'allorganization', component: AllOrganizationListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class SuperAdminAppRoutingModule { }
