import {
  ActionReducerMap, createFeatureSelector, createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPowers from './powers/powers.reducer';

export interface State {
  powers: fromPowers.State;
}

export const reducers: ActionReducerMap<State> = {
  powers: fromPowers.reducer,
};


export const metaReducers: Array<MetaReducer<State>> = !environment.production ? [] : [];

export const selectPowersState = createFeatureSelector<fromPowers.State>('powers');
const createPowerSelector = createSelector.bind(createSelector, selectPowersState);

export const selectAllPowers = createPowerSelector(fromPowers.selectAll);
export const selectEditedPower = createPowerSelector(fromPowers.getEditedPower);

