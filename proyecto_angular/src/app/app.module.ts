import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    ContactoComponent,
    TecnologiasComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
