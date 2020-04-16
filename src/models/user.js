const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
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

// const covid = new User({
//     name: '  case 40',
//     // age: 68,
//     email: ' Heinhtethtoo2017@gmial.com',
//     password: 'WTF.What#The#Fuck',
//     gender: 'female'
// })

// covid.save().then(() => {
//     console.log(covid)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

module.exports = User