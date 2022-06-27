import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES=[
    {
    id: 'p1',
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://images.adsttc.com/media/images/5841/5a46/e58e/ce9e/1900/03c1/medium_jpg/Empirestatebuildingfrombrooklynnewyork.jpg?1480677955",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
        lat: 40.6971494,
        lng: -74.2598661
    },
    creator: "u1"
},
{
    id: 'p2',
    title: "Empire Statee Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://images.adsttc.com/media/images/5841/5a46/e58e/ce9e/1900/03c1/medium_jpg/Empirestatebuildingfrombrooklynnewyork.jpg?1480677955",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
        lat: 40.6971494,
        lng: -74.2598661
    },
    creator: "u2"
}];



const UserPlaces = ()=>{
   const userID = useParams().userId;
  
   const loadPlaces = DUMMY_PLACES.filter(places=>places.creator===userID); 
return <PlaceList items= {loadPlaces} />

}


export default UserPlaces;