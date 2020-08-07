const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=30698f082515ebcb6bf3577bf4811ca8&query=${lat},${long}&units=f`

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather services.')
        } else if (response.body.error) { 
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast