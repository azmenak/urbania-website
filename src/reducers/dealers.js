import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as D from '../actions/dealers';

const initialState = fromJS({
  currentIndex: null,
  stores: [],
});

export default createReducer(initialState, {
  [D.SET_CURRENT]: (state, { index }) => state.set('currentIndex', index),
});
