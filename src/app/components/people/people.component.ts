import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Input() title: string = '';
  @Input() author: string = '';
  @Input() date: string = '';
  @Input() imgUrl: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
