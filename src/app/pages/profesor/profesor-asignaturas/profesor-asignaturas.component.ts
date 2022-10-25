import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-asignaturas',
  templateUrl: './profesor-asignaturas.component.html',
  styleUrls: ['./profesor-asignaturas.component.scss', '../global-styles.scss']
})
export class ProfesorAsignaturasComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }

  goToMisiones(){
    this.router.navigate(['misiones', 122]);
  }

}
