import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'contactos', component: ContactoComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
