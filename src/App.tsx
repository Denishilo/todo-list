import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TasksType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type ButtonType = 'All' | 'Active' | 'Completed'

const title = 'What to learn';

function App() {

    const tasks = [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]

    const [task, setTask] = useState<Array<TasksType>>(tasks)
    const [error, setError] = useState<string>('')
    const [buttonValue, setButtonValue] = useState<ButtonType>('All')

    const addTask = (newValue: string) => {
        if (newValue.trim() !== '') {
            const newTask: TasksType = {id: v1(), title: newValue, isDone: false}
            setTask([newTask, ...task])
        } else {
            setError('Title is required')
        }
    }

    const changeError = (error: string) => {
        setError(error)
    }

    const changeFilter = (name: ButtonType) => {
        setButtonValue(name)
        switch (name) {
            case "All": setTask([...tasks])
                break
            case "Active": setTask([...tasks].filter(t => !t.isDone))
                break
            case "Completed": setTask([...tasks].filter(t => t.isDone))
        }
    }

    const taskRemove = (id: string) => {
        setTask(task.filter(t => t.id !== id))
    }

    const changeCheckbox = (id: string, isDone: boolean) => {
        setTask(task.map(t => t.id === id ? {...t, isDone: isDone} : t))
    }

    return (
        <div className="App">
            <Todolist title={title}
                      tasks={task}
                      taskRemove={taskRemove}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeCheckbox={changeCheckbox}
                      error={error}
                      changeError={changeError}
                      buttonValue={buttonValue}/>
        </div>
    );
}

export default App;
