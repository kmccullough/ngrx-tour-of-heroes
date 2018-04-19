import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Power } from '../models/power';

@Injectable()
export class PowersService {

  constructor(
    private http: HttpClient
  ) { }

  getPower (id: Power['id']): Observable<Power> {
    return this.http.get<Power>(`http://localhost:3000/powers/${id}`)
  }

  getPowers (): Observable<Array<Power>> {
    return this.http.get<Array<Power>>('http://localhost:3000/powers')
  }

  update (power: Partial<Power>): Observable<Power> {
    return this.http.put<Power>(`http://localhost:3000/powers/${power.id}`, power);
  }
}
