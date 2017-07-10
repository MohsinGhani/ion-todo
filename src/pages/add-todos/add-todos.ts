import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
//import { Data } from '../../providers/data';
import {AngularFireDatabase} from 'angularfire2/database';

class Todos {
  title: string
  description: string
  id: string

  constructor(){}
}


@Component({
  selector: 'page-add-todos',
  templateUrl: 'add-todos.html',
})
export class AddTodos {
  //create new instance of Todos class
  todo: Todos = new Todos();
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase /*public _data: Data*/) {
  }

  submit(){
    //this._data.addTodo(this.todo);
    this.db.list('/todos').push(this.todo);
    this.todo = new Todos();
    this.navCtrl.parent.select(0);
  }

}
