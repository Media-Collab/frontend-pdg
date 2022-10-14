import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Http } from 'src/libs/Http';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarEstudianteComponent implements OnInit {
  // call the service https://apimocha.com/testpdg/users and iterate

  @Input() estudiantes: string[] = [];
  @Output() borrarInfo = new EventEmitter<any>();

  public users: any = [];

  constructor() {}

  ngOnInit(): void {
    Http.instance
      .get('users')
      .then((res: any) => {
        console.log('res: ', res);
        this.users = res;
      })
      .catch((err: any) => {
        console.log('err: ', err);
      });
  }

  borrarData() {
    this.estudiantes = [];
    //this.borrarInfo.emit();
  }
}
