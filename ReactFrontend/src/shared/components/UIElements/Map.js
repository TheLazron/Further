// // import React from 'react';
// // import IMap from "mapmyindia-react";


// // import './Map.css';

// // <IMap
// // markers={[
// //     {
// //         position: [18.5314, 73.845],
// //         draggable: true,
// //         title: "Marker title",
// //         onClick: e => {
// //             console.log("clicked ");
// //         },
// //         onDragend: e => {
// //             console.log("dragged");
// //         }
// //     }
// // ]}
// // />
// // // const Map = props=>{

// // // return <div className = {`map ${props.className}`} style={props.style}>

// // // </div>

// // // };


// // export default Map;
// // // var map=new MapmyIndia.Map("map",{ center:[28.61, 77.23],zoomControl: true,hybrid:true });
// // // //use map.invalidateSize(); if map is not fully loaded in page.

// import React from 'react'
// import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
// import {AuthenticationType} from 'azure-maps-control'

// const option: IAzureMapOptions = {
//     authOptions: {
//         authType: AuthenticationType.subscriptionKey,
//         subscriptionKey: '' // Your subscription key
//     },
// }

// const DefaultMap: React.FC = () => (
//   <AzureMapsProvider>
//     <div style={{ height: '300px' }}>
//       <AzureMap options={option} />
//     </div>
//   </AzureMapsProvider>
// );

// export default DefaultMap
