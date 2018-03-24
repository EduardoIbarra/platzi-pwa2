import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from "@angular/material";
import {NotesService} from "../services/notes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  records: any = [];
  note: any = {};
  constructor(private swUpdate: SwUpdate, private httpClient: HttpClient, public snackBar: MatSnackBar, public notesService: NotesService) {
    httpClient.get('https://www.reddit.com/r/pics.json')
      .subscribe((result: any) => {
        this.records = result.data.children;
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
  }
  saveNote(): void{
    this.note.id = Date.now();
    console.log(this.note);
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
}
