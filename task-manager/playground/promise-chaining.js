require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f320a5a7fc8cda0387f560c

// User.findByIdAndUpdate('5f320a5a7fc8cda0387f560c', {  age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f320a5a7fc8cda0387f560c', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})