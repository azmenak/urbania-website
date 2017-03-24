import { combineReducers } from 'redux-immutable';

import browser from './reducers/browser';
import location from './reducers/location';
// import containers from './reducers/containers';

export default asyncReducers => combineReducers({
  browser,
  location,
  // containers,
  ...asyncReducers,
});
