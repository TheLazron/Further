import React from 'react';
import {useParams} from 'react-router-dom';
import Input from "../../shared/components/FormElements/Input"
import Button from "../../shared/components/FormElements/Button"
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/components/util/validators';
import './PlaceForm.css';
import { useForm } from '../../shared/hooks/form-hook';

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

const UpdatePlace=()=>{
    const placeId = useParams().placeId;


const identifiedPlace = DUMMY_PLACES.find(p=>p.id=== placeId);


 const [formState, inputHandler]=useForm({title:{
    value: identifiedPlace.title,
    isValid: true 
},
    description: {
        value: identifiedPlace.description,
        isValid: true
    }


}, true)    

const placeUpdateSubmitHandler = e=>{
    e.preventDefault();
    console.log(formState.inputs);
}


if(!identifiedPlace){
        return <div className ="center">
            <h2>Could not find place</h2>
        </div>
    }

    return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Entere a valid title" onInput={inputHandler} initialValue={formState.inputs.title.value} initialValid={formState.inputs.title.isValid}/>
        <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Entere a valid description" onInput={inputHandler} value={formState.inputs.description.value} initialValid={formState.inputs.description.valid}/>
        <Button type="submit" disabled={!formState.isValid }>UPDATE PLACE</Button>
    </form>
}

export default UpdatePlace;