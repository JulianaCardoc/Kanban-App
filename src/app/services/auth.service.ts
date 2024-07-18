import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  apiUrl = 'https://fake-trello-api.herokuapp.com/';

  constructor() {}

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}api/v1/auth/login`, {
      email: email,
      password: password,
    });
  }
}
