import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
// import { PlaygroundComponent } from './playground/playground.component';
import { UserLogListComponent } from './components/user-log-list/user-log-list.component';


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
    // PlaygroundComponent,
    UserLogListComponent,
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
    MatPaginatorModule
  ],
  providers: [
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
