import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  private login: boolean = false;
  private user: any = {
    nombre: '',
    document: '',
    tipo: ''
  }
  private loginSubject$ = new BehaviorSubject<any>({ login: this.login, user: this.user });
  loginChanged$ = this.loginSubject$.asObservable();

  constructor() {
    this.login = localStorage.getItem('isLog') ? true : false;
    let dataUser = JSON.parse(localStorage.getItem('usuario') as string);
    this.user = dataUser;
  }

  updateLogin(login: boolean, user: any) {
    this.login = login;
    this.user = user;
    this.loginSubject$.next({ login: this.login, user: this.user });
  }

}
