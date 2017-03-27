import React from 'react';
import { compose, withProps } from 'recompose';
import ImmutableProps from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import * as dealerActions from '../../actions/dealers';
import mapStateToProps from './selectors';

const mapStoreToMarker = store => ({
  position: {
    lat: store.get('lat'),
    lng: store.get('lng'),
  },
  title: store.get('name'),
});

const Composed = Base => compose(
  connect(mapStateToProps),
  withProps(({ dispatch }) => ({
    onMarkerClick: (store, i) => dispatch(dealerActions.setCurrent(i, store.toObject())),
    onMapLoad: gmap => dispatch(dealerActions.gmapLoaded(() => gmap)),
  }))
)(Base);

const WrappedGoogleMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      center={props.center.toObject()}
      defaultZoom={10}
      ref={props.onMapLoad}
    >
      {props.stores.map((store, i) =>
        <Marker
          key={`${store.get('lat')}-${store.get('lng')}`}
          {...mapStoreToMarker(store)}
          label={props.currentIndex !== i ? null : {
            labelOrigin: {
              x: 0,
              y: 30,
            },
            text: store.get('name'),
          }}
          onClick={() => props.onMarkerClick(store, i)}
        />
      )}
    </GoogleMap>
  ))
);

const Map = props => (
  <WrappedGoogleMap
    containerElement={<div style={{ height: 400 }} />}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${CONFIG.googleMapsApiKey}`}
    loadingElement={
      <div>Loading</div>
    }
    mapElement={<div style={{ height: '100%' }} />}
    {...props}
  />
);

Map.propTypes = {
  stores: ImmutableProps.list,
  center: ImmutableProps.map,
};

export default Composed(Map);
