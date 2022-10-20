import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

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
  }
}
