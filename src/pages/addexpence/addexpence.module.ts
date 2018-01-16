import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddexpencePage } from './addexpence';

@NgModule({
  declarations: [
    AddexpencePage,
  ],
  imports: [
    IonicPageModule.forChild(AddexpencePage),
  ],
})
export class AddexpencePageModule {}
