const mongoose = require('mongoose')
require('../db/mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task