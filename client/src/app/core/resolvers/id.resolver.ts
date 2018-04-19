import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Power } from '../models/power';
import { EditPower } from '@state/powers/powers.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IdResolver implements Resolve<string>{
  constructor(
    private store: Store<Power>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = <Power['id']><any>route.paramMap.get('id');
    this.store.dispatch(new EditPower({ id }));
    return id;
  }
}
