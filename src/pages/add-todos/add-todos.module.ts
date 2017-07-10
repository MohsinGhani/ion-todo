import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTodos } from './add-todos';

@NgModule({
  declarations: [
    AddTodos,
  ],
  imports: [
    IonicPageModule.forChild(AddTodos),
  ],
  exports: [
    AddTodos
  ]
})
export class AddTodosModule {}
