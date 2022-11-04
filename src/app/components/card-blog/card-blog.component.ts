import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss'],
})
export class CardBlogComponent implements OnInit {
  @Input() name: string = '';
  @Input() mail: string = '';
  @Input() fecha: string = '';
  @Input() url: string = '';
  @Input() imgUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
