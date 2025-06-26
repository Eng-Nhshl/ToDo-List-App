import React, { useEffect, useState } from 'react'
import taskServices from './services/tasks'
import Tasks from './components/Tasks'
import TasksForm from './components/TasksForm'
import Notification from './components/Notification'


const App = () => {
  const [tasks, setTasks] = useState(null)
  const [newTask, setNewTask] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [messages, setMessages] = useState({
    errorMsg: null,
    successMsg: null
  })

  useEffect(() => {
    taskServices.getAll()
    .then(initialTask => setTasks(initialTask))
  }, [])


  if (!tasks) return

  const addTasks = (event) => {
    event.preventDefault()

    if (newTask === '') {
      setMessages({
        errorMsg: "Please Write Something First!",
        successMsg: null
      })
      setTimeout(() => {
        setMessages({errorMsg: null, successMsg: null})
      }, 5000)
      return
    }

    const taskObject = {
      id: String(tasks.length + 1),
      title: newTask,
      completed: false
    }
    taskServices.create(taskObject)
    .then(returnedTask => {
      setMessages({
        successMsg: "Task Added Successfully.",
        errorMsg: null
      })
      setTimeout(() => {
        setMessages({errorMsg: null, successMsg: null})
      }, 5000)
      setTasks(tasks.concat(returnedTask))
      setNewTask('')
    })
  }

  const deleteTasks = (id) => {
    const task = tasks.find(task => task.id === id)
    if (task && window.confirm(`Sure to delete this task ?`)){
      taskServices.delete(id)
      .then(() => {
        setMessages({
          successMsg: "Task Deleted Successfully.",
          errorMsg: null
        })
        setTimeout(() => {
          setMessages({successMsg: null, errorMsg: null})
        }, 5000)
        setTasks(tasks.filter(t => t.id !== id))
      })
      .catch(() => {
        setMessages({
          errorMsg: "Task is already removed from the server!",
          successMsg: null
        })
        setTimeout(() => {
          setMessages({successMsg: null, errorMsg: null})
        }, 5000)
      })
      setTasks(tasks.filter(t => t.id !== id))
    }
  }

const updateTask = (id, updatedTask) => {
  taskServices.update(id, updatedTask)
    .then(returnedTask => {
      setMessages({
        successMsg: "Task updated successfully.",
        errorMsg: null
      });
      setTimeout(() => {
        setMessages({errorMsg: null, successMsg: null})
      }, 5000);
      setTasks(tasks.map(t => t.id === id ? returnedTask : t))
    })
    .catch(() => {
      setMessages({
        errorMsg: "Something wen wrong update failed!",
        successMsg: null
      })
      setTimeout(() => {
        setMessages({successMsg: null, errorMsg: null})
      }, timeout)
    })
}

  const onTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const tasksToShow = showAll ? tasks : tasks.filter(task => task.completed === true)

  return (
    <div>
      <h1>ToDoList App</h1>
      <Notification messages={messages}/>
      <button onClick={() => setShowAll(!showAll)}>Show {showAll ? 'completed' : 'all'}</button>
      <TasksForm onSubmit={addTasks} onChange={onTaskChange} value={newTask}/>
      <h2>Tasks You Have</h2>
      <Tasks tasks={tasksToShow} onChange={updateTask} onDelete={deleteTasks}/>
    </div>
  )
}

export default App