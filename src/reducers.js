import { combineReducers } from 'redux-immutable';

import browser from './reducers/browser';
import location from './reducers/location';
import site from './reducers/site';
import dealers from './reducers/dealers';
import gmap from './reducers/gmap';
// import containers from './reducers/containers';

export default asyncReducers => combineReducers({
  browser,
  location,
  site,
  dealers,
  gmap,
  // containers,
  ...asyncReducers,
});
