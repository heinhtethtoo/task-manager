require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5e95cde2a6de7b182b5f533e', { age: 1 }).then((user) => {
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

updateAgeAndCount('5e95cda3a6de7b182b5f533b', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})


