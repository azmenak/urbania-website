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
    onMarkerClick: (_, i) => dispatch(dealerActions.setCurrent(i)),
  }))
)(Base);

const WrappedGoogleMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 43.7067558, lng: -79.6378779 }}
      defaultZoom={7}
      ref={props.onMapLoad}
      onClick={props.onMapClick}
    >
      {props.stores.map((store, i) =>
        <Marker
          key={`${store.get('lat')}-${store.get('lng')}`}
          {...mapStoreToMarker(store)}
          onClick={() => props.onMarkerClick(store, i)}
        />
      )}
    </GoogleMap>
  ))
);

const Map = ({ stores, ...props }) => (
  <WrappedGoogleMap
    containerElement={<div style={{ height: 400 }} />}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${CONFIG.googleMapsApiKey}`}
    loadingElement={
      <div>Loading</div>
    }
    mapElement={<div style={{ height: '100%' }} />}
    stores={stores}
    {...props}
  />
);

Map.propTypes = {
  stores: ImmutableProps.list,
};

export default Composed(Map);
