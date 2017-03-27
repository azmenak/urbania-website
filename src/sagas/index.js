import { fork } from 'redux-saga/effects';

import location from './location';
import cia from './cia';
import dealers from './dealers';

export default function* sagas() {
  yield fork(location);
  yield fork(cia);
  yield fork(dealers);
}
