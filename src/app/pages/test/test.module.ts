import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { EstudiantesModule } from '../estudiantes/estudiantes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, FormsModule, ComponentsModule, EstudiantesModule],
})
export class TestModule {}
