import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {
  LoadPowers,
  LoadPowersSuccess,
  LoadPowerSuccess,
  PowersActionTypes,
  UpdatePower,
} from '@state/powers/powers.actions';
import { map, switchMap } from 'rxjs/operators';
import { PowersService } from '@core/services/powers.service';
import { ofType } from '@ngrx/effects'


@Injectable()
export class PowerEffects {

  @Effect()
  loadPowers: Observable<LoadPowersSuccess> = this.actions$.pipe(
    ofType<LoadPowers>(PowersActionTypes.LoadPowers),
    switchMap(() => this.powersService.getPowers()),
    map(powers => new LoadPowersSuccess({ powers })),
  );

  @Effect()
  updatePower: Observable<LoadPowerSuccess> = this.actions$.pipe(
    ofType<UpdatePower>(PowersActionTypes.UpdatePower),
    switchMap(action => this.powersService.update(action.payload.power.changes)),
    map(power => new LoadPowerSuccess({ power })),
  );

  constructor(
    private actions$: Actions,
    private powersService: PowersService
  ) {}
}
