import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss'],
})
export class UsComponent implements OnInit {
  public blogs: any[] = [
    {
      name: 'John Doe',
      mail: 'example@gmail.com',
      url: 'https://i.picsum.photos/id/413/200/200.jpg?hmac=e6w034LWyRaayerJY_efJywx28FwPjv-EC8F10jVtMQ',
      imgUrl:
        'https://i.picsum.photos/id/413/200/200.jpg?hmac=e6w034LWyRaayerJY_efJywx28FwPjv-EC8F10jVtMQ',
    },
    {
      name: 'John Doe',
      mail: 'example@gmail.com',
      url: 'https://i.picsum.photos/id/420/200/200.jpg?hmac=7hdmWb4uHh3ulb7_b_NXZ6QZY_mpCdVcwji4oMqP1Eg',
      imgUrl:
        'https://i.picsum.photos/id/420/200/200.jpg?hmac=7hdmWb4uHh3ulb7_b_NXZ6QZY_mpCdVcwji4oMqP1Eg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
