import React, {useState} from 'react';


function AddTask({onAddTask}) {
    const [taskText, setTaskText] = useState('');
    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            onAddTask(taskText);
            setTaskText('');
        }
    }
    
    return (
        <div>
            <input
                type='text'
                placeholder='Digite uma nova tarefa'
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
    )
}

export default AddTask;