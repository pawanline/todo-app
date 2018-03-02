import { Component } from '@angular/core';

import { NavController, AlertController,ToastController,reorderArray } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo-provider";
 
import { TodoArchivePage } from "../../pages/todo-archive/todo-archive";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  constructor(private toastController:ToastController,private todoProvider: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoProvider.getTodos();
  }

  archiveTodo(todoIndex){
    this.todoProvider.archiveTodo(todoIndex);
  }

  goToArchivePage(){
    this.navCtrl.push(TodoArchivePage);
  }
  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoProvider.addTodo(todoText);
            addTodoAlert.onDidDismiss(()=>{
              let addToast = this.toastController.create({
                message:"toast added",
                duration:2000,
              });
              addToast.present();
            });
          }
        }
      ]
    });
    addTodoAlert.present();

  }

  editTodo(todoIndex){
    let editTodoAlert = this.alertController.create({
      title: "Edit A Todo",
      message: "Edit Your Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Edit Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.editTodoInput;
            this.todoProvider.editTodo(todoText, todoIndex);

            editTodoAlert.onDidDismiss(()=> {
                  let editTodoToast = this.toastController.create({
                  message: "Todo Edited",
                  duration: 2000
                });
                editTodoToast.present();
            });
            
          }
        }
      ]
    });
    editTodoAlert.present();
  }

}
