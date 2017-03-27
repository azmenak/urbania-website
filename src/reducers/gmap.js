import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as G from '../actions/gmap';
// import * as D from '../actions/dealers';

const initialState = fromJS({
  center: {
    lat: 43.7067558,
    lng: -79.6378779,
  },
});

export default createReducer(initialState, {
  [G.SET_CENTER]: (state, { center }) => state.set('center', fromJS(center)),

  // [D.SET_CURRENT]: (state, { store }) => state.set('center', fromJS({
  //   lat: store.lat,
  //   lng: store.lng,
  // })),
});
