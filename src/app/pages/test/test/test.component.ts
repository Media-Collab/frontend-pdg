import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
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
}
