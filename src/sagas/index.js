import { fork } from 'redux-saga/effects';

import location from './location';
import cia from './cia';

export default function* sagas() {
  yield fork(location);
  yield fork(cia);
}
