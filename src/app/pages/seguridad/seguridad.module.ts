import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EstudiantesModule } from '../estudiantes/estudiantes.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EstudiantesModule
  ],
  exports: [
    LoginComponent
  ]
})
export class SeguridadModule { }
