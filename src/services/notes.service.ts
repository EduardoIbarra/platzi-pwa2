import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()
export class NotesService {
  constructor(public afDB: AngularFireDatabase){
  }
  note = [];
  public getNotes(){
    return this.afDB.list('/notes/');
  }
  public getNote(id){
    return this.afDB.object('/notes/' + id);
  }
  public createNote(note){
    return this.afDB.database.ref('/notes/' + note.id).set(note);
  }
  public editNote(note){
    return this.afDB.database.ref('/notes/' + note.id).set(note);
  }
  public deleteNote(note){
    return this.afDB.database.ref('/notes/' + note.id).remove();
  }
}
