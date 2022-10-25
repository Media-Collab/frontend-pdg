import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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

  constructor() {}

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
    console.log('Usuario :', this.inputUsuario);
    console.log('Password :', this.inputPassword);
    // refresh web
    // window.location.reload();
    // this.isLog = true;
  }
}
