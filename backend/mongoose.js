const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://engnhshl:${password}@cluster0.4wcxh.mongodb.net/ToDoListApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
})

const Task = mongoose.model('Task', noteSchema)

// const task = new Task({
//   title: 'Testing MongoDB Application',
//   completed: true,
// })

// task.save().then((result) => {
//   console.log('task saved!')
//   mongoose.connection.close()
// })

Task.find({}).then((result) => {
  result.forEach((task) => {
    console.log(task)
  })
  mongoose.connection.close()
})
