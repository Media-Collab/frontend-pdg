import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorAsignaturasComponent } from './profesor-asignaturas/profesor-asignaturas.component';
import { ProfesorModulosComponent } from './profesor-modulos/profesor-modulos.component';
import { ProfesorActividadesComponent } from './profesor-actividades/profesor-actividades.component';
import { ProfesorActividadesListaComponent } from './profesor-actividades-lista/profesor-actividades-lista.component';
import { ProfesorMisionesComponent } from './profesor-misiones/profesor-misiones.component';
import { GridModule, TableModule } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProfesorResultadosComponent } from './profesor-resultados/profesor-resultados.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    TableModule
  ],
  declarations: [
    ProfesorAsignaturasComponent,
    ProfesorModulosComponent,
    ProfesorActividadesComponent,
    ProfesorActividadesListaComponent,
    ProfesorMisionesComponent,
    SafePipe,
    ProfesorResultadosComponent,
  ],
})
export class ProfesorModule {}
