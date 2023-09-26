import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        }
        setTasks([...tasks, newTask])
    }

    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id===taskId ? {...task, completed: !task.completed} : task)
        setTasks(updatedTasks)
    }

    const updateTask = (taskId, text) => {
        const updatedTasks = tasks.map(task =>
            task.id===taskId ? {...task, text} : task
        )
        setTasks(updatedTasks)
    }

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
    }
  return (
    <div className="App">
            <h1>To Do List</h1>
            <main>
                <AddTask 
                    onAddTask={addTask}
                />
                <TaskList 
                    tasks={tasks}
                    onToggleTask={toggleTask}
                    onUpdateTask={updateTask}
                    onDeleteTask={deleteTask}
                />
            </main>
            
        </div>
  )
}

export default App
