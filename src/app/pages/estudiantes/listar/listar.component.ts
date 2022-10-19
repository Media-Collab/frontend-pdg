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
  public createUnityInstance: any;

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

    Http.instance
      .get('users')
      .then((res: any) => {
        console.log('res: ', res);
        this.users = res;
      })
      .catch((err: any) => {
        console.log('err: ', err);
      });
    /*
     */

    /* var buildUrl = 'assets/demo/Build';
    var config = {
      dataUrl: buildUrl + '/UnityLoader',
      frameworkUrl: buildUrl + '/unity-build.wasm.framework.unityweb',
      codeUrl: buildUrl + '/unity-build.wasm.code.unityweb',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'DefaultCompany',
      productName: 'pdg-unity',
      productVersion: '0.1',
      devicePixelRatio: 0,
    };

    let container = document.querySelector('#unity-container') || new Element();
    var canvas: HTMLElement =
      document.querySelector('#unity-canvas') || new HTMLElement();
    var loadingBar: HTMLElement =
      document.querySelector('#unity-loading-bar') || new HTMLElement();
    var progressBarFull: HTMLElement =
      document.querySelector('#unity-progress-bar-full') || new HTMLElement();
    var fullscreenButton: HTMLElement =
      document.querySelector('#unity-fullscreen-button') || new HTMLElement();
    var mobileWarning: HTMLElement =
      document.querySelector('#unity-mobile-warning') || new HTMLElement();

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = 'unity-mobile';
      config.devicePixelRatio = 1;
      mobileWarning.style.display = 'block';
      setTimeout(() => {
        mobileWarning.style.display = 'none';
      }, 5000);
    } else {
      canvas.style.width = '960px';
      canvas.style.height = '600px';
    }
    loadingBar.style.display = 'block';

    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + '%';
    })
      .then((unityInstance: any) => {
        loadingBar.style.display = 'none';
        fullscreenButton.onclick = () => {
          unityInstance.SetFullscreen(1);
        };
      })
      .catch((message: any) => {
        alert(message);
      }); */

    //@ts-ignore
    /* createUnityInstance(document.querySelector('#unity-canvas'), {
      dataUrl: '/assets/demo/Build/unity-build.data.unityweb',
      frameworkUrl: '/assets/demo/Build/unity-build.wasm.framework.unityweb',
      codeUrl: '/assets/demo/Build/unity-build.wasm.code.unityweb',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'DefaultCompany',
      productName: 'pdg-unity',
      productVersion: '1.0',
    }); */
    const loader = (window as any).UnityLoader;

    this.gameInstance = loader.instantiate(
      'gameContainer',
      `/assets/demo/Build/demo.json`,
      {
        onProgress: (gameInstance: any, progress: number) => {
          this.progress = progress;
          if (progress === 1) {
            this.isReady = true;
          }
        },
      }
    );
  }

  borrarData() {
    this.estudiantes = [];
    //this.borrarInfo.emit();
  }
}
