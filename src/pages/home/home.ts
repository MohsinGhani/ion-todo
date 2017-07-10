import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Data } from '../../providers/data';
//import {AngularFire} from 'angularfire2'
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

/*const data = [
  {
    title: "Micro Assignment",
    description: "Create Micro Assignment before monday",
    id: 1
  },
  {
    title: "OOP Assignment",
    description: "Create OOP Assignment before wednesday",
    id: 2
  },
  {
    title: "TRW Presentation",
    description: "Preparation of TRW Presentation before monday",
    id: 3
  }
]*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  //todos: any = [];
  todos: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController,public db: AngularFireDatabase ,/*public _data: Data*/) {
      //this.todos = data;
      //this._data.todos.subscribe((todo) => { this.todos.push(todo) });
      this.todos = db.list('/todos');

  }

}
