import { call, fork, take } from 'redux-saga/effects';
import * as L from '../actions/location';
import * as G from '../actions/ga';

const dimensions = {
  RELEASE: 'dimension1',
  CLIENT_ID: 'dimension2',
  WINDOW_ID: 'dimention3',
};

export const events = {};

const uuid = function b(a) {
  return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : // eslint-disable-line no-bitwise, no-mixed-operators
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

function startGoogleAnalytics(id) {
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  /* eslint-enable */

  window.ga('create', id, 'auto');
  window.ga('require', 'displayfeatures');
  window.ga('set', 'transport', 'beacon');
  window.ga('set', dimensions.RELEASE, process.env.RELEASE);

  window.ga('send', 'pageview');

  return new Promise(resolve => {
    window.ga(tracker => {
      const clientId = tracker.get('clientId');
      tracker.set(dimensions.CLIENT_ID, clientId);
      tracker.set(dimensions.WINDOW_ID, uuid());
      resolve(tracker);
    });
  });
}

function* monitorPageChanges() {
  while (true) {
    const { location: { pathname, search, hash } } = yield take(L.CHANGE);
    window.ga('set', 'page', [pathname, search, hash].join(''));
    window.ga('send', 'pageview');
  }
}

function* monitorEvents() {
  while (true) {
    const { category, action, label, value } = yield take(G.EVENT);
    window.ga('send', 'event', category, action, label, value);
  }
}

export default function* invade() {
  yield call(startGoogleAnalytics, CONFIG.gaId);
  yield fork(monitorPageChanges);
  yield fork(monitorEvents);
}
