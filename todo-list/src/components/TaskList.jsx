import React from 'react';

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
                    
                    <button 
                        onClick={() => onDeleteTask(task.id)}
                        >
                        apagar
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList