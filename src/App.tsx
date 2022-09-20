import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean,
}

export type ButtonType = 'All' | 'Active' | 'Completed'

const title = 'What to learn';

function App() {

    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]

    const [task, setTask] = useState<Array<TasksType>>(tasks)

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

    const taskRemove = (id: number) => {
        setTask(task.filter(t => t.id !== id))
    }

    return (
        <div className="App">
            <Todolist title={title}
                      tasks={task}
                      taskRemove={taskRemove}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
