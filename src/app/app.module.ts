import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MasterComponent } from './components/master/master.component';
import { ImoveisComponent } from './components/imoveis/imoveis.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { LoginService } from './services/login.service';
import { TokeninterceptorService } from './services/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MasterComponent,
    ImoveisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule, 
    FormsModule,
  ],
  providers: [
    LoginService,
    AuthGuardService,
    {provide:HTTP_INTERCEPTORS, useClass:TokeninterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
