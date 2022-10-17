import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ImoveisComponent } from './components/imoveis/imoveis.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
{
  path: '',
  component: MasterComponent,
  children: [
  { path: '', component: DashboardComponent },
  { path: 'imoveis', component: ImoveisComponent },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
