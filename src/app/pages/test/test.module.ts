import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { EstudiantesModule } from '../estudiantes/estudiantes.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [TestComponent, CreateActivityComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    EstudiantesModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class TestModule {}
