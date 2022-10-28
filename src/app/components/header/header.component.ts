import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GuardTestGuard } from 'src/app/guards/guard-test.guard';
import { LoginStatusService } from 'src/app/services/login-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLog: boolean = false;
  public loginChangedSubscription: Subscription;
  public user: any = {
    nombre: '',
    document: '',
    tipo: ''
  }

  constructor(private router: Router, private loginService: LoginStatusService) {
    this.loginChangedSubscription = this.loginService.loginChanged$.subscribe((loginValue) => {
      this.isLog = loginValue.login;
      this.user = loginValue.user;
      console.log(this.user);

    })
  }

  ngOnInit(): void {
    this.isLog = localStorage.getItem('isLog') ? true : false;
    let dataStorage = localStorage.getItem('usuario') as string;
    let dataUser = JSON.parse(dataStorage);
    this.user = dataUser;
  }

  login(): void {
    localStorage.setItem('isLog', 'true');
    this.isLog = true;
  }

  logout(): void {
    localStorage.clear();
    this.isLog = false;
    this.router.navigate(['/']);
    this.loginService.updateLogin(false, {
      nombre: '',
      document: '',
      tipo: ''
    });
  }

  ngOnDestroy(): void {
    if (this.loginChangedSubscription) {
      this.loginChangedSubscription.unsubscribe();
    }
  }
}
