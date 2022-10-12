import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public estudiantes : string[] = [];
  public inputEstudiante : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addEstudiante(){
    if (this.inputEstudiante !== '' || this.inputEstudiante !== null || this.inputEstudiante !== undefined ) {
      this.estudiantes.push(this.inputEstudiante);
      this.inputEstudiante = '';
    }

    console.log(this.estudiantes);
    
  }

  borrarData(){
    this.estudiantes = [];
  }

}
