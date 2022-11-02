import { Component, OnInit } from '@angular/core';
declare var configGodot: any;

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
})
export class CreateActivityComponent implements OnInit {
  public loading: boolean = false;
  public activityTitle: string = 'Actividad 1';
  public topics: string = 'Pensamiento crítico';
  public inputPregunta: string = '';
  public multimediaContent: any = [
    {
      type: 'h5p',
      src: 'https://h5p.org/h5p/embed/6725',
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/QvwZyZznWTQ',
    },
    {
      type: 'game',
      src: 'build',
    },
  ];

  public indexMultimediaContent: number = 0;
  public srcMultimediaContent: string =
    'https://www.youtube.com/embed/QvwZyZznWTQ';

  constructor() { }

  ngOnInit(): void {
    configGodot("assets/build/index", "assets/build/index.pck", "assets/build/index.wasm");
    console.log(configGodot);
  }

}
