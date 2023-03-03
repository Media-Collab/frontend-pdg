import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Http } from 'src/libs/Http';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListarEstudianteComponent implements OnInit {
  // call the service https://apimocha.com/testpdg/users and iterate

  gameInstance: any;
  progress = 0;
  isReady = false;
  version: number = 1;
  @Input() estudiantes: string[] = [];
  @Output() borrarInfo = new EventEmitter<any>();

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  public users: any = [];

  constructor() {}

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://i.picsum.photos/id/413/200/200.jpg?hmac=e6w034LWyRaayerJY_efJywx28FwPjv-EC8F10jVtMQ',
    };
    this.slides[1] = {
      src: 'https://i.picsum.photos/id/420/200/200.jpg?hmac=7hdmWb4uHh3ulb7_b_NXZ6QZY_mpCdVcwji4oMqP1Eg',
    };
    this.slides[2] = {
      src: 'https://i.picsum.photos/id/677/200/200.jpg?hmac=x54KZ3q80hA0Sc36RV2FUoDZdE3R31oaC988MA1YE2s',
    };

    // Http.instance
    //   .get('users')
    //   .then((res: any) => {
    //     console.log('res: ', res);
    //     this.users = res;
    //   })
    //   .catch((err: any) => {
    //     console.log('err: ', err);
    //   });

    // }

    // borrarData() {
    //   this.estudiantes = [];
    //   //this.borrarInfo.emit();
    // }
  }
}
