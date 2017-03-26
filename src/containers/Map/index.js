import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 43.7067558, lng: -79.6378779 }}
      defaultZoom={7}
      ref={props.onMapLoad}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker =>
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      )}
    </GoogleMap>
  ))
);

export default () => (
  <Map
    containerElement={<div style={{ height: 400 }} />}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${CONFIG.googleMapsApiKey}`}
    loadingElement={
      <div>Loading</div>
    }
    mapElement={<div style={{ height: '100%' }} />}
    markers={[]}
  />
);
