const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=30698f082515ebcb6bf3577bf4811ca8&query=30.6744,-96.37&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()