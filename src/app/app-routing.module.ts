import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ImoveisComponent } from './components/imoveis/imoveis.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MasterComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home', component: DashboardComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'imoveis', component: ImoveisComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
