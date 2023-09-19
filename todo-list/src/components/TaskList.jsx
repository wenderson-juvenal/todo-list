import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { FiCheck } from 'react-icons/fi';


function TaskList({tasks, onToggleTask, onEditTask, onUpdateTask, onDeleteTask}) {
    const [editText, setEditText] = useState()

    const edit = (taskId, text) => {
        setEditText(text)
        onEditTask(taskId)
    }

    return (
        <ul>
            {tasks.map(task => (
                task.isEditing ? (
                    <li key={task.id}>
                        <span 
                            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                            onClick={() => onToggleTask(task.id)}
                            >
                            <input 
                                type="text" 
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                            />
                        </span>
                        <FiCheck onClick={() => onUpdateTask(task.id, editText)}/>
                        <FaTrash onClick={() => onDeleteTask(task.id)}/>
                    </li>
                ) : (
                    <li key={task.id}>
                        <span 
                            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                            onClick={() => onToggleTask(task.id)}
                            >
                            {task.text}
                        </span>
                        <RiEdit2Line onClick={()=>edit(task.id, task.text)}/>
                        <FaTrash onClick={() => onDeleteTask(task.id)}/>
                    </li>
                )
                
            ))}
        </ul>
    )
}

export default TaskList
