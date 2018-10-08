import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { RegistrationComponent } from './components/registration/registration.component';
// import { RegistrationComponent } from './components/authregistration/registration.component';
// import { GrouplistComponent } from './components/grouplist/grouplist.component';
// import { GroupComponent } from './components/grouplist/group/group.component';
// import { UserslistComponent } from './components/userslist/userslist.component';
// import { UserComponent } from './components/user/user.component';
// import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
// import { SidebarNamesComponent } from './components/sidebar-names/sidebar-names.component';



const appRoutes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'registration', component:  RegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    // RegistrationComponent,
    // GrouplistComponent,
    // GroupComponent,
    // UserslistComponent,
    // UserComponent,
    // SidebarMenuComponent,
    // SidebarNamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
