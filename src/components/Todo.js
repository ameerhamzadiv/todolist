import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default function Todo({task ,togglecompleted, deletetodo, edittodo}) {
  return (
    <div className="Todo">
      <p onClick={() => togglecompleted(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
      <FontAwesomeIcon icon={faEdit} onClick={() => edittodo(task.id)} />
      <FontAwesomeIcon icon={faTrash} onClick={() => deletetodo(task.id)} />
      </div>
    </div>
  )
}
