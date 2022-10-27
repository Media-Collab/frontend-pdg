import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profesor-misiones',
  templateUrl: './profesor-misiones.component.html',
  styleUrls: ['./profesor-misiones.component.scss', '../global-styles.scss']
})
export class ProfesorMisionesComponent implements OnInit, OnDestroy {

  public idAsignatura: number = 0;
  private sub: any;

  constructor(public route: ActivatedRoute, public router : Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idAsignatura = +params['idAsignatura']; //El mas convierte el parametro a numero.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToModulos(){
    this.router.navigate(['modulos', 125]);
  }

}
