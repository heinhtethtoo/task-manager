const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const uesrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')) {
                throw new Error (`password not contain ${password}`)
            }
        }
    },
    age: {
        type: Number,
        default: 18,
        validate(value) {
            if (value <= 0) {
                throw new Error('Age must be a postive number')
            }
        },
        required: true
    },
    gender: {
        type: String

    }
})

uesrSchema.pre('save',async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', uesrSchema)


module.exports = User