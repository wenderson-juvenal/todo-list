import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';


function TaskList({tasks, onToggleTask, onDeleteTask}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span 
                        style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                        onClick={() => onToggleTask(task.id)}
                        >
                        {task.text}
                    </span>
                    <RiEdit2Line />
                    <FaTrash onClick={() => onDeleteTask(task.id)}/>
                </li>
            ))}
        </ul>
    )
}

export default TaskList
