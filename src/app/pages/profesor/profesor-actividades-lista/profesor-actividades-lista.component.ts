import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profesor-actividades-lista',
  templateUrl: './profesor-actividades-lista.component.html',
  styleUrls: [
    './profesor-actividades-lista.component.scss',
    '../global-styles.scss',
  ],
})
export class ProfesorActividadesListaComponent implements OnInit {
  public idMision: number = 0;
  private sub: any;
  public user: any = {
    nombre: '',
    document: '',
    tipo: ''
  }

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.idMision = +params['idMision']; //El mas convierte el parametro a numero.
    });

    let dataStorage = localStorage.getItem('usuario') as string;
    let dataUser = JSON.parse(dataStorage);
    this.user = dataUser;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToActividad(val: any) {
    this.router.navigate(['actividades-lista/actividad', val]);
  }
}
