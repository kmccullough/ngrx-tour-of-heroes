import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface AuthResponse {
  authenticated: boolean;
}

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): Observable<AuthResponse['authenticated']> {
    return this.http.get<AuthResponse>('http://localhost:3000/auth')
      .pipe(
        map(response => response.authenticated)
      );
  }

}
