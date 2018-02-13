import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOutcomePage } from './add-outcome';

@NgModule({
  declarations: [
    AddOutcomePage,
  ],
  imports: [
    IonicPageModule.forChild(AddOutcomePage),
  ],
})
export class AddOutcomePageModule {}
