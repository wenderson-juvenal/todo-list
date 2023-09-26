import React, { useEffect, useState } from 'react';
import '../App.css'
import { FaTrash } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { FiCheck } from 'react-icons/fi';


function TaskList({tasks, onToggleTask, onUpdateTask, onDeleteTask}) {    
    const [taskStates, setTaskStates] = useState(tasks.map(task => ({ isEditing: false, editText: task.text })));

    useEffect(() => {
        setTaskStates(tasks.map(task => ({ isEditing: false, editText: task.text })));
    }, [tasks]);
    
    const edit = (taskId) => {
        setTaskStates((prevTaskStates) =>
            prevTaskStates.map((taskState) =>
                taskState.isEditing ? { ...taskState, isEditing: false } : taskState
            )
        );
        setTaskStates((prevTaskStates) =>
        prevTaskStates.map((taskState, index) =>
            index === taskId ? { ...taskState, isEditing: true } : taskState
        )
        );
     };

    const handleInputChange = (taskId, e) => {
        setTaskStates((prevTaskStates) =>
            prevTaskStates.map((taskState, index) =>
                index === taskId ? { ...taskState, editText: e.target.value } : taskState
            )
        );
    };

    const handleEditSave = (i, taskId) => {
        const editedText = taskStates[i].editText;
        onUpdateTask(taskId, editedText);
        setTaskStates((prevTaskStates) =>
            prevTaskStates.map((taskState, index) =>
                index === i ? { ...taskState, isEditing: false } : taskState
            )
        );
    };
    
    return (
        <ul>
            {tasks.map((task, index) => (
                taskStates[index] && taskStates[index].isEditing ? (
                    <li key={task.id}>
                        <span 
                            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                            >
                            <input 
                                type="text" 
                                value={taskStates[index].editText}
                                onChange={e => handleInputChange(index, e)}
                            />
                        </span>
                        <FiCheck onClick={() => handleEditSave(index, task.id)}/>
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
                        <RiEdit2Line onClick={()=>edit(index)}/>
                        <FaTrash onClick={() => onDeleteTask(task.id)}/>
                    </li>
                )
                
            ))}
        </ul>
    )
}

export default TaskList
