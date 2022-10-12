import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input() estudiantes : string[] = [];  
  @Output() borrarInfo = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarData(){
    this.estudiantes = [];
    //this.borrarInfo.emit();
  }

}
