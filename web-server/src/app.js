const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Steven Winter'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Steven Winter'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'What do you want?'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Hot',
        location: 'Bryan'
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})