import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesor-misiones',
  templateUrl: './profesor-misiones.component.html',
  styleUrls: ['./profesor-misiones.component.scss', '../global-styles.scss']
})
export class ProfesorMisionesComponent implements OnInit, OnDestroy {

  public idAsignatura: number = 0;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idAsignatura = +params['idAsignatura']; //El mas convierte el parametro a numero.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
