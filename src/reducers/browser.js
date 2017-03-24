import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as B from 'actions/browser';

const initialState = fromJS({
  atTop: true,
});

export default createReducer(initialState, {
  [B.AT_TOP]: state => state.set('atTop', true),
  [B.OFF_TOP]: state => state.set('atTop', false),
});
