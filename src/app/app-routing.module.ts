import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/seguridad/login/login.component';
import { CrearComponent } from './pages/estudiantes/crear/crear.component';
import { GuardTestGuard } from './guards/guard-test.guard';
import { ListarEstudianteComponent } from './pages/estudiantes/listar/listar.component';
// screen home
import { MainComponent } from './pages/home/main/main.component';
import { BlogComponent } from './pages/home/blog/blog.component';
import { UsComponent } from './pages/home/us/us.component';
// test screens
import { TestComponent } from './pages/test/test/test.component';
import { CreateActivityComponent } from './pages/test/create-activity/create-activity.component';
// docent screens
import { ProfesorAsignaturasComponent } from './pages/profesor/profesor-asignaturas/profesor-asignaturas.component';
import { ProfesorMisionesComponent } from './pages/profesor/profesor-misiones/profesor-misiones.component';
import { ProfesorModulosComponent } from './pages/profesor/profesor-modulos/profesor-modulos.component';
import { ProfesorActividadesListaComponent } from './pages/profesor/profesor-actividades-lista/profesor-actividades-lista.component';
import { ProfesorActividadesComponent } from './pages/profesor/profesor-actividades/profesor-actividades.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
    //canActivate: [GuardTestGuard],
  },
  {
    path: 'inicio',
    component: MainComponent,
  },
  {
    path: 'nosotros',
    component: UsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'asignaturas',
    component: ProfesorAsignaturasComponent,
    canActivate: [GuardTestGuard],
  },
  {
    path: 'misiones/:idAsignatura',
    component: ProfesorMisionesComponent,
    canActivate: [GuardTestGuard],
  },
  {
    path: 'modulos/:idMision',
    component: ProfesorModulosComponent,
    canActivate: [GuardTestGuard],
  },
  {
    path: 'actividades-lista/:idModulo',
    component: ProfesorActividadesListaComponent,
    canActivate: [GuardTestGuard],
  },
  {
    path: 'actividades-lista/actividad/:id',
    component: ProfesorActividadesComponent,
    canActivate: [GuardTestGuard],
  },
  {
    path: 'testActividad',
    component: CreateActivityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
