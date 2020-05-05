import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositeComponent } from './service/deposite/deposite.component';
import { WithdrawComponent } from './service/withdraw/withdraw.component';
import { TransfereComponent } from './service/transfere/transfere.component';
import { TransactionsComponent } from './service/transactions/transactions.component';
import { ShowBalanceComponent } from './service/show-balance/show-balance.component';
import { OurServiceComponent } from './service/our-service/our-service.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'user/register', pathMatch: 'full'},
  { path: 'user', component:UserComponent,
    children: [
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent}
    ]
},
  { path: '', redirectTo: '/user', pathMatch: 'full'},
  { path: 'welcome', component:WelcomeComponent,
    children:[
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo:'home', pathMatch: 'full'},
        
      { 
        path: 'service',
        component: ServiceComponent,
        children:[
          { path: 'our-service', component: OurServiceComponent},
          { path: '', redirectTo: 'our-service', pathMatch: 'full'},
          { path: 'showBalance', component: ShowBalanceComponent},
          { path: 'deposite', component: DepositeComponent},
          { path: 'withdraw', component: WithdrawComponent},
          { path: 'transfere', component: TransfereComponent},
          { path: 'transactions', component: TransactionsComponent}
        ]
  },
      { path: 'about', component: AboutComponent},
      { path: 'clients', component: ClientsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'profile', component: ProfileComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
