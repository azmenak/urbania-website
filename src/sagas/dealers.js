import { takeEvery } from 'redux-saga/effects';
import * as D from '../actions/dealers';

let gmap;

function storeGmapRef({ getGmap }) {
  gmap = getGmap();
}

function panToStore({ store }) {
  gmap.panTo({
    lat: store.lat,
    lng: store.lng,
  });
}

export default function* dealers() {
  yield takeEvery(D.GMAP_LOADED, storeGmapRef);
  yield takeEvery(D.SET_CURRENT, panToStore);
}
