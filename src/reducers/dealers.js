import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';

const initialState = fromJS({
  stores: [],
});

export default createReducer(initialState, {
});
