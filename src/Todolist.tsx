import React, {KeyboardEvent, useRef} from "react";
import {ButtonType, TasksType} from "./App";
import {Button} from "./components/Button/Button";

type Todolist = {
    title: string,
    tasks: Array<TasksType>,
    taskRemove: (id: string) => void,
    changeFilter: (name: ButtonType) => void
    addTask: (newValue: string) => void
}

export const Todolist = (props: Todolist) => {

    const myRef = useRef<HTMLInputElement>(null)

    const inputHandler = () => {
        if (myRef.current) {
            props.addTask(myRef.current.value)
            myRef.current.value = ''
        }
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            inputHandler()
        }

    }

    const changeFilter = (value: ButtonType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (id: string) => {
        props.taskRemove(id)
    }


    const mapTasks = props.tasks.map((task) => {
        return (<li key={task.id}>
            <Button name={'x'} callback={() => removeTaskHandler(task.id)}/>
            <input type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
        </li>)
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input ref={myRef} type={"text"} onKeyDown={onKeyDownHandler}/>
                <Button name={'+'} callback={inputHandler}/>
            </div>
            <ul>
                <li>{mapTasks}</li>
            </ul>
            <div>
                <Button name={'All'} callback={() => changeFilter('All')}/>
                <Button name={'Active'} callback={() => changeFilter('Active')}/>
                <Button name={'Completed'} callback={() => changeFilter('Completed')}/>
            </div>
        </div>
    )
}