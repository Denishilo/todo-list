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


    const addTask = (newValue: string) => {
        const newTask: TasksType = {id: v1(), title: newValue, isDone: false}
        setTask([newTask, ...task])

    }

    const changeFilter = (name: ButtonType) => {
        if (name === 'All') {
            setTask([...tasks])
        }
        if (name === 'Active') {
            setTask([...tasks].filter(t => !t.isDone))
        }
        if (name === 'Completed') {
            setTask([...tasks].filter(t => t.isDone))
        }
    }

    const taskRemove = (id: string) => {
        setTask(task.filter(t => t.id !== id))
    }

    return (
        <div className="App">
            <Todolist title={title}
                      tasks={task}
                      taskRemove={taskRemove}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    );
}

export default App;
