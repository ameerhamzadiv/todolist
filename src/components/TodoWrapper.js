import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

export default function TodoWrapper() {

    const [todos, settodos] = useState([]);

    const addtodo = (todo) => {
        settodos([...todos, 
            {
                id: uuidv4(), 
                task: todo, 
                completed: false, 
                isEditing: false
            }]);
            
    }

    const togglecompleted = (id) => {
        settodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))

    }

    const deletetodo = (id) => {
        settodos(todos.filter(todo => todo.id !== id));
    }

    const edittodo = (id) => {
        settodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing
    } : todo));
}

const edittask = (task, id) => {
    settodos(todos.map(todo => todo.id === id
? {...todo, task: task, isEditing: !todo.isEditing} : todo))
}

  return (
    <div className="TodoWrapper">
        <h1>Todo List</h1>
      <TodoForm addtodo={addtodo} /> 
      {todos.map((todo, index) => (
        todo.isEditing ? (
           <EditTodoForm edittodo={edittask} task={todo} key={index} /> 
        ) : (
        <Todo task={todo} key={index} togglecompleted={togglecompleted} deletetodo={deletetodo} edittodo={edittodo} />
        )
        
      ))}
      
    </div>
  )
}
