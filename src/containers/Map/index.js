import React from 'react';
import ImmutableProps from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import mapStateToProps from './selectors';

const onMarkerClick = (marker, store) => {
  console.log(event, store.toJS());
};

const mapStoreToMarker = store => ({
  position: {
    lat: store.get('lat'),
    lng: store.get('lng'),
  },
  title: store.get('name'),
});


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
          onClick={event => props.onMarkerClick(event, store, i)}
        />
      )}
    </GoogleMap>
  ))
);

const Map = ({ stores }) => (
  <WrappedGoogleMap
    containerElement={<div style={{ height: 400 }} />}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${CONFIG.googleMapsApiKey}`}
    loadingElement={
      <div>Loading</div>
    }
    mapElement={<div style={{ height: '100%' }} />}
    stores={stores}
    onMarkerClick={onMarkerClick}
  />
);

Map.propTypes = {
  stores: ImmutableProps.list,
};

export default connect(mapStateToProps)(Map);
