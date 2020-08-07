const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]

if (!city) {
    console.log('Please provide city.')
} else {
    geocode(city, (error, data) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(data.lat, data.long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
          })
    })
}

