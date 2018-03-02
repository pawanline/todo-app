import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from "../../providers/todo/todo-provider";
/**
 * Generated class for the TodoArchivePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-todo-archive',
  templateUrl: 'todo-archive.html',
})
export class TodoArchivePage {

  public archiveTodos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public todoProvider:TodoProvider) {
  }

  ionViewDidLoad() {
    this.archiveTodos = this.todoProvider.getArchivedTodos();

}
}
