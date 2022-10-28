import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginStatusService } from 'src/app/services/login-status.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public inputUsuario: string = '';
  public inputPassword: string = '';

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  public estudiantes: string[] = [];
  public inputEstudiante: string = '';

  constructor(private loginService: LoginStatusService) {}

  ngOnInit(): void {}

  addEstudiante() {
    if (
      this.inputEstudiante !== '' ||
      this.inputEstudiante !== null ||
      this.inputEstudiante !== undefined
    ) {
      this.estudiantes.push(this.inputEstudiante);
      this.inputEstudiante = '';
    }

    console.log(this.estudiantes);
  }

  borrarData() {
    this.estudiantes = [];
  }

  login(): void {
    localStorage.setItem('isLog', 'true');
    const dataUser = {
      nombre: 'usuarioPrueba',
      document: '123456',
      tipo: 'estudiante'
    }
    localStorage.setItem('usuario', JSON.stringify(dataUser));
    this.loginService.updateLogin(true, dataUser);
    console.log('Usuario :', this.inputUsuario);
    console.log('Password :', this.inputPassword);
    // refresh web
    // window.location.reload();
    // this.isLog = true;
  }
}
