const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=30698f082515ebcb6bf3577bf4811ca8&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Error')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        const current = response.body.current
        console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees.`)
    }
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bryan.json?access_token=pk.eyJ1Ijoic3RldmVwbGF5c2hvcm4iLCJhIjoiY2tkZ3BtcTZpMHIxbjJzdDVmMWZscG00aCJ9.TLKsTTUvEoUq7tja3bedbw&limit=1'

request({ url: url2, json: true }, (error, response) => {
    if (error) {
        console.log('Error')
    } else if (response.body.features.length === 0) {
        console.log('No matching result')
    } else {
        const long = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        console.log(long, lat)
    }
    
})