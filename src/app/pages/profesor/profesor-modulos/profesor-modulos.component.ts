import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profesor-modulos',
  templateUrl: './profesor-modulos.component.html',
  styleUrls: ['./profesor-modulos.component.scss', '../global-styles.scss']
})
export class ProfesorModulosComponent implements OnInit {

  public idMision: number = 0;
  private sub: any;

  constructor(public route: ActivatedRoute, public router : Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idMision = +params['idMision']; //El mas convierte el parametro a numero.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToActividades(){
    this.router.navigate(['actividades-lista', 230]);
  }

}