import { eventChannel } from 'redux-saga';
import { put, call, take, cancelled, fork } from 'redux-saga/effects';

import { history } from '../router';
import * as L from '../actions/location';

const historyEmitter = () => eventChannel(emitter => {
  const cb = (loc, action) => {
    emitter({ location: loc, action });
  };
  const unlisten = history.listen(cb);
  return () => {
    unlisten();
  };
});

function* browserScrollBehavior() {
  const lastScrollY = [];
  const doc = document.documentElement;
  while (true) {
    const { action } = yield take(L.CHANGE);
    if (action === 'PUSH') {
      lastScrollY.push((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));
      window.scrollTo(0, 0);
    } else if (action === 'POP') {
      window.scrollTo(0, lastScrollY.pop());
    }
  }
}

export default function* location() {
  yield fork(browserScrollBehavior);

  const historyChannel = yield call(historyEmitter);
  try {
    yield put(L.change('POP', history.location));
  } catch (error) {
    console.log(error);
  }
  try {
    while (true) {
      const transition = yield take(historyChannel);
      if (transition) {
        yield put(L.change(transition.action, transition.location));
      } else {
        yield put(L.change('POP', history.location));
      }
    }
  } finally {
    if (yield cancelled()) {
      historyChannel.close();
    }
  }
}
