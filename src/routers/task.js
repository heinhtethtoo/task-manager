const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

// Creating End Point (Create)

router.post('/tasks',async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send(e)
    }   
})
 
// Fetch EndPiont (Read)

router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id',async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        if(!task) {
            return res.status(404).send()
        }

        res.status(200).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

// Update Endpoint



router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']  
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(404).send({ error: 'Invaid Update'})
    }

    try {
        const task = await Task.findById(req.params.id)

        updates.forEach((update) => task[update] = req.body[update])

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        
        if(!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

// Deleting Api Endpoint 



router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router
