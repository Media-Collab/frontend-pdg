import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarEstudianteComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';

@NgModule({
  declarations: [ListarEstudianteComponent, CrearComponent],
  imports: [CommonModule],
  exports: [ListarEstudianteComponent, CrearComponent],
})
export class EstudiantesModule {}
