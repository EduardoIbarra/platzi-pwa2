import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(public afDB: AngularFireDatabase,
              public afAuth: AngularFireAuth){
  }
  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
}
