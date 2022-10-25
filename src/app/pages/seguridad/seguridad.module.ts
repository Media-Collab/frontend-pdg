import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EstudiantesModule } from '../estudiantes/estudiantes.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormModule } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    FormModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    EstudiantesModule,
  ],
  exports: [LoginComponent],
})
export class SeguridadModule {}
