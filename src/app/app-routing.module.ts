import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/seguridad/login/login.component';
import { CrearComponent } from './pages/estudiantes/crear/crear.component';
import { GuardTestGuard } from './guards/guard-test.guard';
import { ListarEstudianteComponent } from './pages/estudiantes/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'estudiantes',
    component: ListarEstudianteComponent,
  },
  {
    path: 'estudiantes/crear',
    component: CrearComponent,
    canActivate: [GuardTestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
