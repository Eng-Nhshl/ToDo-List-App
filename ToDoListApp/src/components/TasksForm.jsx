const TasksForm = ({onSubmit, onChange, value}) => {
  return (
    <div className="taskform">
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value}/>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default TasksForm