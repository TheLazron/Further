
// import React from 'react';
// import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

// function Map(props){
// console.log("logging from map", props.cords);
//     return(

//     <MapContainer
//     // style={{ height: '100%', width: '100%' }}
//     // center={[props.cords.lat, props.cords.lng]}
//     center={props.cords}
//     zoom={1}
//     scrollWheelZoom={true}
//   >
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
//     />

//     <Marker
//       position={props.cords}
//     >
//       <Popup>{props.cords}</Popup>
//     </Marker>
//   </MapContainer>
// )

// }


// export default Map;
import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom
    });
  
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);  

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
