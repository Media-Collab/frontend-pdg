import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
})
export class CreateActivityComponent implements OnInit {
  public activityTitle: string = 'Actividad 1';
  public topics: string = 'Pensamiento crítico';
  public inputPregunta: string = '';

  constructor() {}

  ngOnInit(): void {}
}
