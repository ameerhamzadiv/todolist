import React, { useState } from 'react'

export default function TodoForm({addtodo}) {
    const [value, setvalue] = useState("");
    const handlesubmit = (e) =>{
        e.preventDefault();
        addtodo(value);
        setvalue("");
    }
  return (
    <form className="TodoForm" onSubmit={handlesubmit}>
        <input type="text" className="todo-input" value={value} placeholder="Enter a task" onChange={(e) => setvalue(e.target.value)} />
        <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}
