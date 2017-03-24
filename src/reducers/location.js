import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as L from '../actions/location';
import { history } from '../router';

const initialState = fromJS(history.location);

export default createReducer(initialState, {
  [L.CHANGE]: (state, { location }) => state.merge(location),
});
