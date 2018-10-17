import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { RegistrationComponent } from './components/registration/registration.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import { LandingComponent } from './components/landing/landing.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { GrouplistComponent } from './components/grouplist/grouplist.component';
import { GroupComponent } from './components/group/group.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UserComponent } from './components/user/user.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarNamesComponent } from './components/sidebar-names/sidebar-names.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './services/notification.service';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserLogListComponent } from './components/user-log-list/user-log-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminGrouplistComponent } from './components/admin-landing/admin-grouplist/admin-grouplist.component';
import { AdminGroupComponent } from './components/admin-landing/admin-group/admin-group.component';
import { AdminUserslistComponent } from './components/admin-landing/admin-userslist/admin-userslist.component';
import { AdminUserComponent } from './components/admin-landing/admin-user/admin-user.component';
import { AdminLoglistComponent } from './components/admin-landing/admin-loglist/admin-loglist.component';
import { AdminLogComponent } from './components/admin-landing/admin-log/admin-log.component';
import {MatDialogModule} from '@angular/material/dialog';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [
  { path: '', component:  LandingComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'newpassword', component:  NewpasswordComponent},
  { path: 'registration', component:  RegistrationComponent},
  { path: 'groups', component:  GroupComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LandingComponent,
    NewpasswordComponent,
    GrouplistComponent,
    GroupComponent,
    UserslistComponent,
    UserComponent,
    SidebarMenuComponent,
    SidebarNamesComponent,
    NotificationComponent,
    UserLogListComponent,
    UserProfileComponent,
    AdminGrouplistComponent,
    AdminGroupComponent,
    AdminUserslistComponent,
    AdminUserComponent,
    AdminLoglistComponent,
    AdminLogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    PerfectScrollbarModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthenticationService, NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
