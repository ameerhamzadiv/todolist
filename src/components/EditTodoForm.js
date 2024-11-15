import React, { useState } from 'react'

export default function EditTodoForm({edittodo, task}) {
  const [value, setvalue] = useState(task.task);
  const handlesubmit = (e) =>{
      e.preventDefault();
      edittodo(value, task.id);
      setvalue("");
  }
  return (
    <form className="TodoForm" onSubmit={handlesubmit}>
        <input type="text" className="todo-input" value={value} placeholder="Update task" onChange={(e) => setvalue(e.target.value)} />
        <button type="submit" className="todo-btn">Update Task</button>
    </form>
  )
}
