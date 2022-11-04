import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var configGodot: any;

@Component({
  selector: 'app-profesor-actividades',
  templateUrl: './profesor-actividades.component.html',
  styleUrls: ['./profesor-actividades.component.scss'],
})
export class ProfesorActividadesComponent implements OnInit {
  // get the id from the url and save it in a variable

  public idActivity: number = 0;
  private sub: any;

  public questions: any[] = [];

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

  public preguntas1: any = [
    {
      option: '¿Cuánto presupuesto sería si fueran 3 personas?',
    },
    {
      option:
        '¿Cuántas combinaciones se pueden relizar con un dado de resultado 3?',
    },
  ];

  public preguntas2: any = [
    {
      option: '¿Qué cantidad se uede obtener si sale un valor de 6?',
    },
  ];

  public indexMultimediaContent: number = 0;
  public srcMultimediaContent: string =
    'https://www.youtube.com/embed/QvwZyZznWTQ';

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    configGodot(
      'assets/build/index',
      'assets/build/index.pck',
      'assets/build/index.wasm'
    );
    console.log(configGodot);
    this.sub = this.route.params.subscribe((params) => {
      this.idActivity = +params['id']; //El mas convierte el parametro a numero.
      console.log(this.idActivity);
      if (this.idActivity == 47) {
        this.srcMultimediaContent = 'https://h5p.org/h5p/embed/6725';
        this.activityTitle = 'INU ¿Qué vamos a comer?';
        this.topics = 'Pensamiento crítico | Análisis de problemas';
        this.questions = this.preguntas1;
      } else if (this.idActivity == 23) {
        this.srcMultimediaContent = 'https://www.youtube.com/embed/q0heH1FMCQU';
        this.activityTitle = 'KOFER ¿Qué vamos a llevar?';
        this.topics = 'Pensamiento crítico';
        this.questions = this.preguntas2;
      } else if (this.idActivity == 11) {
        this.srcMultimediaContent =
          'https://sketchfab.com/models/6ee97010819742a8b8713605695ec703/embed';
        this.activityTitle = 'KUGULA ¿Qué vamos a comprar?';
        this.topics = 'Análisis de problemas';
      }
      this.questions = this.preguntas2;
    });
  }
}
