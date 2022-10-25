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
    canActivate: [GuardTestGuard],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
