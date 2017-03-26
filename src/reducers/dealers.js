import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';

const initialState = fromJS({
  currentIndex: null,
  stores: [],
});

export default createReducer(initialState, {
});
