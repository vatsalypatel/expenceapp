import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { APIService } from './../../common/apiService';
import { DashboardPageModule } from '../../pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    DashboardPageModule
  ],
  providers : [
    APIService
  ]
})
export class LoginPageModule {}
