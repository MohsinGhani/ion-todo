import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database'

/**
 * Generated class for the Connection component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class Connection {
  status: FirebaseObjectObservable<any>;
  constructor(public db: AngularFireDatabase) {
    this.status = this.db.object('.info/connected');
  }

}
