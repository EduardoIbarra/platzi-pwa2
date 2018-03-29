import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from "@angular/material";
import {NotesService} from "../services/notes.service";
import {MessagingService} from "../services/messaging.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  note: any = {};
  notes: any = [];
  message: any = null;
  constructor(private swUpdate: SwUpdate, public snackBar: MatSnackBar, public notesService: NotesService, private msgService: MessagingService,
              private authService: AuthService, private  pessagingService: MessagingService) {
    this.notesService.getNotes().valueChanges()
      .subscribe((response) => {
        console.log(response);
        this.notes = response;
      });
  }
  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((v) => {
        if (confirm('Actualización disponible, deseas obtenerla?')) {
          window.location.reload();
        }
      });
    }
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
  }
  saveNote(): void {
    if(!this.note.id) {
      this.note.id = Date.now();
    }
    this.notesService.createNote(this.note).then(() => {
      this.note = {};
      this.openSnackBar('Nota Guardada con éxito', null);
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  selectNote(note): void {
    this.note = JSON.parse(JSON.stringify(note));
  }
  login(){
    this.authService.loginWithFacebook();
  }
}
