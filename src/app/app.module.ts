import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SuperAdminHeaderComponent } from './super_admin/super-admin-header/super-admin-header.component';
import { SuperAdminFooterComponent } from './super_admin/super-admin-footer/super-admin-footer.component';
import { SuperAdminLeftSidenavComponent } from './super_admin/super-admin-left-sidenav/super-admin-left-sidenav.component';
import { SuperAdminMainContentComponent } from './super_admin/super-admin-main-content/super-admin-main-content.component';
import { SuperAdminRightSettingsComponent } from './super_admin/super-admin-right-settings/super-admin-right-settings.component';
import { SuperAdminAppRoutingModule } from './super_admin/super-admin-app-routing/super-admin-app-routing.module';
import { SuperAdminMasterComponent } from './super_admin/super-admin-master/super-admin-master.component';
import { SuperAdminDashboardComponent } from './super_admin/super-admin-dashboard/super-admin-dashboard.component';
import { CreateOrganizationComponent } from './super_admin/organization/create-organization/create-organization.component';
import { AllOrganizationListComponent } from './super_admin/organization/all-organization-list/all-organization-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperAdminHeaderComponent,
    SuperAdminFooterComponent,
    SuperAdminLeftSidenavComponent,
    SuperAdminMainContentComponent,
    SuperAdminRightSettingsComponent,
    SuperAdminMasterComponent,
    SuperAdminDashboardComponent,
    CreateOrganizationComponent,
    AllOrganizationListComponent
  ],
  imports: [
    BrowserModule,
    SuperAdminAppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
