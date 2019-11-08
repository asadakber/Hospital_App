import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from "@angular/fire";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DocterDetailsComponent } from './components/docter-details/docter-details.component';
import { ServicesComponent } from './components/services/services.component';
import { CardiologyComponent } from './components/services/cardiology/cardiology.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DoctorCategoryComponent } from './components/doctor-category/doctor-category.component';
import { DetailsComponent } from './components/details/details.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { AppointmentViewComponent } from './components/appointment-view/appointment-view.component';
import { IndexComponent } from './components/index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LocationComponent } from './components/location/location.component'
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Services1Component } from './components/services1/services1.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    DocterDetailsComponent,
    ServicesComponent,
    CardiologyComponent,
    DoctorCategoryComponent,
    DetailsComponent,
    AppointmentComponent,
    AppointmentDetailsComponent,
    AppointmentViewComponent,
    IndexComponent,
    AboutUsComponent,
    ContactUsComponent,
    LocationComponent,
    ForgotPasswordComponent,
    AboutComponent,
    ContactComponent,
    Services1Component,
    AdminDashboardComponent,
    AdminLoginComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQfH_nGKWQngDHLdHwk1LPLnvDe967kAo'
    }),
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
