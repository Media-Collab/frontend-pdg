import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public peoples: any[] = [
    {
      title: 'Descubre los proyectos realizados por estudiantes',
      author: 'Fabian Ramirez',
      date: 'Ago 5  2022',
      imgUrl:
        '/assets/img/ProfesoraPaola.png',
    },
    {
      title: '5 diseños industriales destacados ',
      author: 'Daniela Hernandez',
      date: 'Jul 15 2022',
      imgUrl:
        '/assets/img/ProfesorRafael.png',
    },
  ];

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  constructor() { }

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
