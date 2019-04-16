import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('rentme_meta')) || new DecodedToken();
  }

  private saveToken(token: string): string {
    this.decodedToken = jwt.decodeToken(token);

    localStorage.setItem('rentme_auth', token);
    localStorage.setItem('rentme_meta', JSON.stringify(this.decodedToken));

    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/auth', userData).pipe(map((token: string) => this.saveToken(token)));
  }

  logout() {
    localStorage.removeItem('rentme_auth');
    localStorage.removeItem('rentme_meta');

    this.decodedToken = new DecodedToken();
  }

  isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  getAuthToken(): string {
    return localStorage.getItem('rentme_auth');
  }

  getUsername(): string {
    return this.decodedToken.username;
  }
}
