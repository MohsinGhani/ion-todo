import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Connection } from './connection';

@NgModule({
  declarations: [
    Connection,
  ],
  imports: [
    IonicPageModule.forChild(Connection),
  ],
  exports: [
    Connection
  ]
})
export class ConnectionModule {}
