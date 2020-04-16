require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e9549a3a5b013116f8461db').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: true})
    return count
}

deleteTaskAndCount('5e95d62f7885361da0865b3a').then((count) => {
    console.log('imcomple count',count)
}).catch((e) => {
    console.log(e)
})

