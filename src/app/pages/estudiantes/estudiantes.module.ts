import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { CarouselModule } from '@coreui/angular';
import { ListarEstudianteComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';

@NgModule({
  declarations: [ListarEstudianteComponent, CrearComponent],
  imports: [
    CommonModule,
    // CarouselModule,
    RouterModule,
  ],
  exports: [ListarEstudianteComponent, CrearComponent],
})
export class EstudiantesModule {}
