import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
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

  constructor(private loginService: LoginStatusService, public router : Router) {}

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
    let dataUser: any;
    if(this.inputUsuario.trim() === 'profesor'){
      dataUser = {
        nombre: 'profesor',
        document: '123456',
        tipo: 'profesor'
      }
    }else{
      dataUser = {
        nombre: 'estudiante',
        document: '123456',
        tipo: 'estudiante'
      }
    }

    localStorage.setItem('usuario', JSON.stringify(dataUser));
    this.loginService.updateLogin(true, dataUser);
    this.router.navigate(['asignaturas']);
  }
}
