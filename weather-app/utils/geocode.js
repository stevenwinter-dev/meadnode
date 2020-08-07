const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3RldmVwbGF5c2hvcm4iLCJhIjoiY2tkZ3BtcTZpMHIxbjJzdDVmMWZscG00aCJ9.TLKsTTUvEoUq7tja3bedbw&limit=1`

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services.')
        } else if (response.body.features.length === 0) { 
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                long: response.body.features[0].center[0],
                lat: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode