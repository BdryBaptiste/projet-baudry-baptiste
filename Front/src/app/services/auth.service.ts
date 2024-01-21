import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor() {}

  login(user: { login: string, password: string }) {
    if (user.login !== '' && user.password !== '') {
      this.loggedIn.next(true);
    }
  }

  logout() {
    this.loggedIn.next(false);
  }
}
