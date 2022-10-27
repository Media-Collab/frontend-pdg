import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorAsignaturasComponent } from './profesor-asignaturas/profesor-asignaturas.component';
import { ProfesorModulosComponent } from './profesor-modulos/profesor-modulos.component';
import { ProfesorActividadesComponent } from './profesor-actividades/profesor-actividades.component';
import { ProfesorActividadesListaComponent } from './profesor-actividades-lista/profesor-actividades-lista.component';
import { ProfesorMisionesComponent } from './profesor-misiones/profesor-misiones.component';
import { GridModule } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    GridModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ProfesorAsignaturasComponent,
    ProfesorModulosComponent,
    ProfesorActividadesComponent,
    ProfesorActividadesListaComponent,
    ProfesorMisionesComponent,
  ],
})
export class ProfesorModule { }
