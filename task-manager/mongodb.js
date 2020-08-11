// C rud

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())


// { useNewUrlParser: true }
// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

    // const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Aaron',
    //     age: 35
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

//     db.collection('users').insertMany([
//         {
//             name: 'Kerry',
//             age: 31
//         }, {
//             name: 'Chris',
//             age: 34
//         }
//     ], (error, result) => {
//             if (error) {
//                 return console.log('Unable to insert docs')
//             }
//             console.log(result.ops)
//     })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Code',
    //         completed: true
    //     }, {
    //         description: 'Game',
    //         completed: true
    //     }, {
    //         description: 'Drink',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert docs')
    //     }
    //     console.log(result.ops)
    // })
// })

// c R ud

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('5f3061ddb3d61a8d1c249938') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }   
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 35 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5f305e7611214285f49ced8b') }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })
// })

// cr U d

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
    // db.collection('users').updateOne({ 
    //     _id: new ObjectID('5f305bcfe7062c5d102355f4') 
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })
    // .then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

//     db.collection('tasks').updateMany({
//         completed: false
//     }, {
//         $set: {
//             completed: true
//         }
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// })

// cru D

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    // db.collection('users').deleteMany({
    //     age: 35
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        description: 'Drink'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})