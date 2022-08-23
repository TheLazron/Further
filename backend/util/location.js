const axios = require('axios');
const geocoder = require('geocoder');

const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
  
 const cords =  geocoder.geocode(address, function (err, response) {

    const data = response.data;

    if (!data || data.status === 'ZERO_RESULTS') {
      const error = new HttpError(
        'Could not find location for the specified address.',
        422
      );
      throw error;
    }
    
  const coordinates = data.results[0].geometry.location;

  return coordinates;
  
  })

  return cords;
}

module.exports = getCoordsForAddress;
