import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

declare var configGodot: any;

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
@Component({
  selector: 'app-profesor-actividades',
  templateUrl: './profesor-actividades.component.html',
  styleUrls: ['./profesor-actividades.component.scss'],
})
export class ProfesorActividadesComponent implements OnInit {
  public idActivity: number = 0;
  private sub: any;

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  result: number;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ) {
    this.result = 0;
  }
  // get the id from the url and save it in a variable
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  rollDice() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.clearRect(
        0,
        0,
        this.canvas.nativeElement.width,
        this.canvas.nativeElement.height
      );

      // Resto del código
      ctx.clearRect(
        0,
        0,
        this.canvas.nativeElement.width,
        this.canvas.nativeElement.height
      );

      const diceSize = 200;
      const diceX = this.canvas.nativeElement.width / 2 - diceSize / 2;
      const diceY = this.canvas.nativeElement.height / 2 - diceSize / 2;

      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.fillRect(diceX, diceY, diceSize, diceSize);
      ctx.strokeRect(diceX, diceY, diceSize, diceSize);

      const dotSize = diceSize / 8;
      const dotSpacing = dotSize * 2;

      const dots = [
        [], // 0
        [4], // 1
        [1, 7], // 2
        [1, 4, 7], // 3
        [0, 1, 7, 8], // 4
        [0, 1, 4, 7, 8], // 5
        [0, 1, 3, 5, 7, 8], // 6
      ];

      const dotPositions = dots[Math.floor(Math.random() * 6) + 1];

      ctx.fillStyle = 'black';
      for (let i = 0; i < dotPositions.length; i++) {
        const dotX =
          diceX + dotSpacing + (dotSize + dotSpacing) * (dotPositions[i] % 3);
        const dotY =
          diceY +
          dotSpacing +
          (dotSize + dotSpacing) * Math.floor(dotPositions[i] / 3);
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      this.result = dotPositions.length;
    }
  }

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
      option:
        'Inicias el recoorrido y tras avanzar 1/8 del total de Jm a recorrer, se pincha un neumático, ¿Cuánto avanzaste?',
    },
    {
      option:
        'Para buscar ayuda y reparar el nemático te devuelves 2500Dm hasta la vulcanizadora más cercana, ¿A qué distancia esta la vulcanizadora del inicio del recorrido?',
    },
    {
      option:
        'Una vez reparad el neumático avanzas hasta la mitad del recorrido total (1/2), ¿A qué distancia del punto de inicio queda la mitad del recorrido?',
    },
  ];

  public indexMultimediaContent: number = 0;
  public srcMultimediaContent: string =
    'https://www.youtube.com/embed/QvwZyZznWTQ';

  ngOnInit(): void {
    configGodot(
      'assets/build/index',
      'assets/build/index.pck',
      'assets/build/index.wasm'
    );
    console.log('Godot config: ', configGodot);

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
        this.topics =
          'Los estudiantes definen el lugar de viaje a partir de las opciones que brinda el juego, posteriormente seleccionan 12 objetos de un listado teniendo en cuenta la pertinencia de estos en el lugar al que van a viajar y a partir de estos objetos realizan operaciones de medición de volúmenes mediante bloques de madera que representan los objetos seleccionados';
        this.questions = this.preguntas2;
      } else if (this.idActivity == 11) {
        this.srcMultimediaContent =
          'https://sketchfab.com/models/6ee97010819742a8b8713605695ec703/embed';
        this.activityTitle = 'KUGULA ¿Qué vamos a comprar?';
        this.topics =
          'El docente ubica en una estantería fichas que representan los distintos productos y precios que aparecen en las tarjetas con las que interactuaron en la actividad 1. Los estudiantes deben identificar el costo de los alimentos que vayan a llevar al viaje, estos pueden provenir del listado de alimentos que definieron en la actividad 1 o de un listado que el profesor provee .';
      } else if (this.idActivity == 4) {
        this.srcMultimediaContent = 'https://www.youtube.com/embed/YOvJpU2UBbk';
        this.activityTitle = 'SAFARKA ¿A dónde vamos?';
        this.topics =
          'Mediante un tablero que presenta un recorrido, los estudiantes deben seleccionar un medio de transporte y resolver operaciones que se presentan a manera de actividades como despinchar el auto, recargar combustible, visitar lugares destacados de la ruta, durante el recorrido';
      } else if (this.idActivity == 5) {
        this.srcMultimediaContent = 'https://www.youtube.com/embed/YOvJpU2UBbk';
        this.activityTitle = 'CURSUS: ¿Qué hay en la ciudad?';
        this.topics =
          'Mediante un mapa de una ciudad o un plano cartesiano (dependiendo de la complejidad) se seleccionan diferentes lugares para conocer, estos pueden ser museos, parques, lugares turísticos destacados, centros comerciales, entre algunos. Cada lugar cuenta con una ubicación que se describe a manera de coordenadas y los estudiantes deben ubicar dichas coordenadas en el mapa.';
      }
      this.questions = this.preguntas2;
    });
  }
}
