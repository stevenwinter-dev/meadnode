const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]

if (!city) {
    console.log('Please provide city.')
} else {
    geocode(city, (error, { lat, long, location }) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(lat, long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
          })
    })
}

