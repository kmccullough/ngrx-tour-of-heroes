import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Power } from '@core/models/power';
import { PowersActions, PowersActionTypes } from './powers.actions';


export interface State extends EntityState<Power> {
  editedPowerId?: Power['id'];
}

export const adapter: EntityAdapter<Power> = createEntityAdapter<Power>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PowersActions
): State {
  switch (action.type) {
    case PowersActionTypes.LoadPowersSuccess: {
      return adapter.addAll(action.payload.powers, state);
    }

    case PowersActionTypes.AddPower: {
      return adapter.addOne(action.payload.power, state);
    }

    case PowersActionTypes.UpsertPower: {
      return adapter.upsertOne(action.payload.power, state);
    }

    case PowersActionTypes.UpdatePower: {
      return adapter.updateOne(action.payload.power, state);
    }

    case PowersActionTypes.DeletePower: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PowersActionTypes.AddPowers: {
      return adapter.addMany(action.payload.powers, state);
    }

    case PowersActionTypes.UpsertPowers: {
      return adapter.upsertMany(action.payload.powers, state);
    }

    case PowersActionTypes.UpdatePowers: {
      return adapter.updateMany(action.payload.powers, state);
    }

    case PowersActionTypes.DeletePowers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PowersActionTypes.ClearPowers: {
      return adapter.removeAll(state);
    }

    case PowersActionTypes.EditPower: {
      return { ...state, editedPowerId: action.payload.id };
    }

    default: {
      return state;
    }
  }
}

export const getEditedPowerId = (state: State) => state.editedPowerId;
export const getEditedPower = (state: State) => state.entities[state.editedPowerId];

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
