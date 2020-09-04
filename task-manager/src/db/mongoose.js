const mongoose = require('mongoose')
//C:\Users\Steven\mongodb\bin\mongod.exe --dbpath=\Users\Steven\mongodb-data


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})