import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DocterDetailsComponent } from './components/docter-details/docter-details.component';
import { ServicesComponent } from './components/services/services.component';
import { CardiologyComponent } from './components/services/cardiology/cardiology.component';
import { DoctorCategoryComponent } from './components/doctor-category/doctor-category.component'
import { DetailsComponent } from './components/details/details.component'
import { AppointmentComponent } from './components/appointment/appointment.component'
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component'
import { AppointmentViewComponent } from './components/appointment-view/appointment-view.component'
import { IndexComponent } from './components/index/index.component'
import { AboutUsComponent } from './components/about-us/about-us.component'
import { ContactUsComponent } from './components/contact-us/contact-us.component'
import { LocationComponent } from './components/location/location.component'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Services1Component } from './components/services1/services1.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // }, 

  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  
  {
    path: 'service',
    component: Services1Component
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'index',
    component: IndexComponent
  },

  {
    path: 'contact-us',
    component: ContactUsComponent
  },

  {
    path: 'location',
    component: LocationComponent
  },

  {
    path: 'about-us',
    component: AboutUsComponent
  },
  
  {
    path: 'docter-details',
    component: DocterDetailsComponent
  },

  {
    path: 'services',
    component: ServicesComponent
  },

  {
    path: 'cardiology',
    component: CardiologyComponent
  },

  {
    path: 'doctor-category',
    component: DoctorCategoryComponent
  },

  {
    path: 'details',
    component: DetailsComponent
  },

  {
    path: 'appointment',
    component: AppointmentComponent
  },

  {
    path: 'appointment-details',
    component: AppointmentDetailsComponent
  },

  {
    path: 'appointment-view/:id',
    component: AppointmentViewComponent
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },

  
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },

  
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },

  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
