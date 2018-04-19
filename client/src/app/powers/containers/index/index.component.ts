import { Component, OnInit } from '@angular/core';
import { Power } from '@core/models/power';
import { Observable } from 'rxjs/Observable';
import { selectAllPowers, State } from '@state/index';
import { LoadPowers } from '@state/powers/powers.actions';
import { select, Store } from '@ngrx/store'

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  powers$: Observable<Array<Power>>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadPowers());
    this.powers$ = this.store.pipe(select(selectAllPowers));
  }

}
