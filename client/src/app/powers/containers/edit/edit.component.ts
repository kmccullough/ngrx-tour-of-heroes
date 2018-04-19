import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Power } from '@core/models/power';
import { select, Store } from '@ngrx/store';
import { selectEditedPower, State } from '@state/index';
import { UpdatePower } from '@state/powers/powers.actions';
import { Update } from '@ngrx/entity';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  power$: Observable<Power>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.power$ = this.store.pipe(select(selectEditedPower));
  }

  update(power: Power) {
    const payload: Update<Power> = { id: power.id, changes: power };
    this.store.dispatch(new UpdatePower({ power: payload }));
  }

}
