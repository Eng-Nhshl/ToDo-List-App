const Tasks = ({tasks, onChange, onDelete}) => {
  return (
    <div>
      <ul>
        {tasks.map(task => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onChange(task.id, {...task, completed: !task.completed})}
                />
                <span>
                  {task.title} - {task.completed ? 'Completed' : 'Not Completed'} <button onClick={() => onDelete(task.id)} className="delete">Delete</button>
                </span>
              </label>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Tasks