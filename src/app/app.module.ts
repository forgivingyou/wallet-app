import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { DepositeComponent } from './service/deposite/deposite.component';
import { OurServiceComponent } from './service/our-service/our-service.component';
import { ShowBalanceComponent } from './service/show-balance/show-balance.component';
import { TransactionsComponent } from './service/transactions/transactions.component';
import { TransfereComponent } from './service/transfere/transfere.component';
import { WithdrawComponent } from './service/withdraw/withdraw.component';
import { TopNavbarComponent } from './shared/navbars/top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './shared/navbars/bottom-navbar/bottom-navbar.component';
import { SideNavbarComponent } from './shared/navbars/side-navbar/side-navbar.component';
import { OffersNavbarComponent } from './shared/navbars/offers-navbar/offers-navbar.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationService } from './shared/services/user-registration.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClientsComponent,
    ContactComponent,
    HomeComponent,
    ProfileComponent,
    ServiceComponent,
    DepositeComponent,
    OurServiceComponent,
    ShowBalanceComponent,
    TransactionsComponent,
    TransfereComponent,
    WithdrawComponent,
    TopNavbarComponent,
    BottomNavbarComponent,
    SideNavbarComponent,
    OffersNavbarComponent,
    RegisterComponent,
    WelcomeComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
