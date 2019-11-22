import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquireComponent } from './enquire/enquire.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { NavigationComponent } from './navigation/navigation.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';

import { HospitalNagawaraComponent } from './hospital-nagawara/hospital-nagawara.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppoinmentFrontComponent } from './appoinment-front/appoinment-front.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Navigationbar2Component } from './navigationbar2/navigationbar2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtpformComponent } from './otpform/otpform.component';
import { ConformpasswordformComponent } from './conformpasswordform/conformpasswordform.component';
import { UserIdComponent } from './user-id/user-id.component';
import { EqualValidatorDirective } from './equal-validator.directive';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    EnquireComponent,
    HomeComponent,
    FooterComponent,
    NavigationComponent,
    HospitalDetailsComponent,
    HospitalNagawaraComponent,
    ContactFormComponent,
    AppoinmentFrontComponent,
    LoginComponent,
    RegistrationComponent,
    Navigationbar2Component,
    DashboardComponent,
    OtpformComponent,
    ConformpasswordformComponent,
    UserIdComponent,
    EqualValidatorDirective,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'Enquire',
      component:EnquireComponent,
      data: {  show: false } 
    },
    {
      path:'',
      component:HomeComponent,
      data: {  show: false }
    },
    {
      path:'login',
      component:LoginComponent,
      data: {  showHeader: false } 
    },
    {
      path:'Hospital',
      component:HospitalDetailsComponent,
      data: {  show: false } 
    },
     
    {
      path:'NagawaraHospital',
      component:HospitalNagawaraComponent,
      data: {  show: false }
    },
    {
      path:'contactform',
      component:ContactFormComponent ,
      data: {  show: false }
    },
    {
      path:'appoinment',
      component:AppoinmentFrontComponent,
      data: {  show: false }
    },
    {
      path:'otpform',
      component:OtpformComponent,
      data: { showHeader: false ,show:false,showFooter:false}
    },
    {
      path:'register',
      component:RegistrationComponent,
      data: {  showHeader: false }
    },
    {
      path:'confirmform',
      component:ConformpasswordformComponent,
      data: {  showHeader: false ,show:false,showFooter:false }
    },
    {
      path:'afterlogin',
      component:AppointmentComponent,
      data: {  showHeader: false ,showFooter:false }
    },
    {
      path:'shownav',
      component:Navigationbar2Component,
      data: {  showHeader: false ,show:false,showFooter:false }
    },
    
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
