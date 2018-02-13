import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomesPage } from './incomes';

@NgModule({
  declarations: [
    IncomesPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomesPage),
  ],
})
export class IncomesPageModule {}
