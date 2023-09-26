import React, {useState} from 'react';
import '../App.css'

function AddTask({onAddTask}) {
    const [taskText, setTaskText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskText.trim() !== '') {
            onAddTask(taskText);
            setTaskText('');
        }
    }
    
    return (
        <form  onSubmit={handleSubmit}>
            <input 
                id='addTaskInput'
                type='text'
                placeholder='Digite uma nova tarefa'
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                autocomplete="off"
            />
        </form>
    )
}

export default AddTask;