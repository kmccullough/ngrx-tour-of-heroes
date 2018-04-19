import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Power } from '@core/models/power';

export enum PowersActionTypes {
  LoadPower = '[Powers] Load Power',
  LoadPowerSuccess = '[Powers] Load Power Success',
  EditPower = '[Powers] Edit Power',
  AddPower = '[Powers] Add Power',
  UpsertPower = '[Powers] Upsert Power',
  UpdatePower = '[Powers] Update Power',
  DeletePower = '[Powers] Delete Power',
  LoadPowers = '[Powers] Load Powers',
  LoadPowersSuccess = '[Powers] Load Powers Success',
  AddPowers = '[Powers] Add Powers',
  UpsertPowers = '[Powers] Upsert Powers',
  UpdatePowers = '[Powers] Update Powers',
  DeletePowers = '[Powers] Delete Powers',
  ClearPowers = '[Powers] Clear Powers'
}

export class LoadPower implements Action {
  readonly type = PowersActionTypes.LoadPower;

  constructor(public payload: { id: Power['id'] }) {}
}

export class LoadPowerSuccess implements Action {
  readonly type = PowersActionTypes.LoadPowerSuccess;

  constructor(public payload: { power: Power }) {}
}

export class EditPower implements Action {
  readonly type = PowersActionTypes.EditPower;

  constructor(public payload: { id?: Power['id'] }) {}
}

export class AddPower implements Action {
  readonly type = PowersActionTypes.AddPower;

  constructor(public payload: { power: Power }) {}
}

export class UpsertPower implements Action {
  readonly type = PowersActionTypes.UpsertPower;

  constructor(public payload: { power: Update<Power> }) {}
}

export class UpdatePower implements Action {
  readonly type = PowersActionTypes.UpdatePower;

  constructor(public payload: { power: Update<Power> }) {}
}

export class DeletePower implements Action {
  readonly type = PowersActionTypes.DeletePower;

  constructor(public payload: { id: Power['id'] }) {}
}

export class LoadPowers implements Action {
  readonly type = PowersActionTypes.LoadPowers;

  constructor(public payload = null) {}
}

export class LoadPowersSuccess implements Action {
  readonly type = PowersActionTypes.LoadPowersSuccess;

  constructor(public payload: { powers: Array<Power> }) {}
}

export class AddPowers implements Action {
  readonly type = PowersActionTypes.AddPowers;

  constructor(public payload: { powers: Array<Power> }) {}
}

export class UpsertPowers implements Action {
  readonly type = PowersActionTypes.UpsertPowers;

  constructor(public payload: { powers: Array<Update<Power>> }) {}
}

export class UpdatePowers implements Action {
  readonly type = PowersActionTypes.UpdatePowers;

  constructor(public payload: { powers: Array<Update<Power>> }) {}
}

export class DeletePowers implements Action {
  readonly type = PowersActionTypes.DeletePowers;

  constructor(public payload: { ids: Array<Power['id']> }) {}
}

export class ClearPowers implements Action {
  readonly type = PowersActionTypes.ClearPowers;

  constructor(public payload = null) {}
}

export type PowersActions =
  LoadPowers
  | LoadPowersSuccess
  | AddPower
  | UpsertPower
  | UpdatePower
  | DeletePower
  | AddPowers
  | UpsertPowers
  | UpdatePowers
  | DeletePowers
  | ClearPowers
  | EditPower;
