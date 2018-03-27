import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatOptionModule, MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from "@angular/forms";
import {NotesService} from "../services/notes.service";

const firebase: any = {
  apiKey: 'AIzaSyB9Ctx1mjNjVxPDhVutBLL_yNXxcxq0AyE',
  authDomain: 'angularnotes-febaa.firebaseapp.com',
  databaseURL: 'https://angularnotes-febaa.firebaseio.com',
  projectId: 'angularnotes-febaa',
  storageBucket: 'angularnotes-febaa.appspot.com',
  messagingSenderId: '736724691154'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
