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
      src: '/assets/img/Carousel_1.png',
    };
    this.slides[1] = {
      src: '/assets/img/Carousel_2.png',
    };
    this.slides[2] = {
      src: '/assets/img/Carousel_1.png',
    };
  }
}
