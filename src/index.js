const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

// const bcrypt = require('bcryptjs')
// const myFunction = async () => {
//     const password = 'snake9711'
//     const hashPassword = await bcrypt.hash(password, 8)
//     // $2a$08$8cmbrNnamgAZFHkDdS9M5.ewAKkfGHmdz5Ifj/sbk5TjRtwyGacJa
//     // $2a$08$wQvkGlQWM7sIvoplyOaMeuWGt7nR3C1lp2PbCumIPW6f.kEHqS4OS
//     console.log(password)
//     console.log(hashPassword)

//     const isMatch = await bcrypt.compare(password, hashPassword)
//     console.log(isMatch)

// }
