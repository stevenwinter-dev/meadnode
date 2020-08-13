require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5f335d752a70dc764076578c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findOneAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f34a9f6a305230dfb38f744').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})