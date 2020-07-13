import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
