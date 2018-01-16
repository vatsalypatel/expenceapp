import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { AddexpencePageModule } from './../addexpence/addexpence.module';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    AddexpencePageModule
  ],
})
export class DashboardPageModule {}
