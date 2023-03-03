import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss'],
})
export class UsComponent implements OnInit {
  public blogs: any[] = [
    {
      name: 'Paola Andrea Castillo Beltrán',
      mail: 'pacastillo@uao.edu.co',
      url: 'https://www.uao.edu.co/perfil/paola-andrea-castillo-beltran/',
      imgUrl:
        '/assets/img/ProfesoraPaola.png',
    },
    {
      name: 'Rafael Mauricio Martínez Gutiérrez',
      mail: 'rmmartinez@uao.edu.co',
      url: 'https://www.uao.edu.co/perfil/rafael-mauricio-martinez-gutierrez/',
      imgUrl:
        '/assets/img/ProfesorRafael.png',
    },
    {
      name: 'Jimmy Gilberto Dávila Vélez',
      mail: 'jgdavila@uao.edu.co',
      url: 'https://www.uao.edu.co/perfil/jimmy-gilberto-davila-velez/',
      imgUrl:
        '/assets/img/ProfesorJimmy.png',
    },
    {
      name: 'Boris Villamil Ramírez',
      mail: 'web@radcolombia.org',
      url: 'https://radcolombia.org/web/boris-villamil-ramirez',
      imgUrl:
        '/assets/img/ProfesorBoris.png',
    },
    {
      name: 'Miguel Fernando Gonzalez Arana',
      mail: 'web@radcolombia.org',
      url: 'https://www.linkedin.com/in/miguel-fdo-gonzalez/?originalSubdomain=co',
      imgUrl:
        '/assets/img/ProfesorMiguel.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
