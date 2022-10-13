import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/seguridad/login/login.component';
import { CrearComponent } from './pages/estudiantes/crear/crear.component';
import { GuardTestGuard } from './guards/guard-test.guard';

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
