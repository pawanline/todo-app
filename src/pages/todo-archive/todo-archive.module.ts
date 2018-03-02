import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoArchivePage } from './todo-archive';

@NgModule({
  declarations: [
    TodoArchivePage,
  ],
  imports: [
    IonicPageModule.forChild(TodoArchivePage),
  ],
  exports: [
    TodoArchivePage
  ]
})
export class TodoArchivePageModule {}
