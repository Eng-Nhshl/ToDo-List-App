const tasksRouter = require('express').Router()
const Task = require('../models/task')

tasksRouter.get('', (req, res) => {
  Task.find({}).then(tasks => {
    res.json(tasks)
  })
})

tasksRouter.get('/:id', (req, res, next) => {
  Task.findById(req.params.id)
    .then(task => {
      task ? res.json(task)
        : res.status(404).end()
    })
    .catch(error => next(error))
})

tasksRouter.post('/', (req, res, next) => {
  const body = req.body

  const task = new Task({
    title: body.title,
    completed: body.completed || false,
  })

  task.save()
    .then(savedTask => {
      res.json(savedTask)
    })
    .catch(error => next(error))
})

tasksRouter.delete('/:id', (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch((error) => next(error))
})

tasksRouter.put('/:id', (req, res, next) => {
  Task.findById(req.params.id)
    .then((task) => {
      if (!task) {
        return res.status(404).end()
      }

      task.completed = !task.completed

      if (req.body.title !== undefined) {
        task.title = req.body.title
      }

      return task.save().then((updatedTask) => {
        res.json(updatedTask)
      })
    })
    .catch(error => next(error))
})

module.exports = tasksRouter