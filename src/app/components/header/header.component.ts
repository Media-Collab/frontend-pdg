import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLog: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLog = localStorage.getItem('isLog') ? true : false;
  }

  login(): void {
    localStorage.setItem('isLog', 'true');
    this.isLog = true;
  }

  logout(): void {
    localStorage.clear();
    this.isLog = false;
    this.router.navigate(['/']);
  }
}
