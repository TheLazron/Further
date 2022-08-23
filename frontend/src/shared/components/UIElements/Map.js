
import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

function Map(props){
console.log("logging from map", props.cords);
    return(

    <MapContainer
    // style={{ height: '100%', width: '100%' }}
    // center={[props.cords.lat, props.cords.lng]}
    center={props.cords}
    zoom={1}
    scrollWheelZoom={true}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
    />

    <Marker
      position={props.cords}
    >
      <Popup>{props.cords}</Popup>
    </Marker>
  </MapContainer>
)

}


export default Map;