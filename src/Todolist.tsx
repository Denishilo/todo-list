import React, {KeyboardEvent, useRef} from "react";
import {ButtonType, TasksType} from "./App";
import {Button} from "./components/Button/Button";
import {Checkbox} from "./components/Checkbox/Checkbox";
import styles from'./Styles.module.css'

type Todolist = {
    title: string,
    tasks: Array<TasksType>,
    taskRemove: (id: string) => void,
    changeFilter: (name: ButtonType) => void
    addTask: (newValue: string) => void
    changeCheckbox:(id:string, isDone: boolean)=>void
    error:string
    changeError:(error:string)=>void
    buttonValue:ButtonType
}

export const Todolist = (props: Todolist) => {
    const{title,tasks,taskRemove,addTask,changeCheckbox,error,changeError,buttonValue}=props

    const myRef = useRef<HTMLInputElement>(null)


    const inputHandler = () => {

        if (myRef.current) {
            addTask(myRef.current.value.trim())
            myRef.current.value = ''
        }
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        changeError('')
        if (event.key === 'Enter') {
            inputHandler()
        }

    }

    const changeFilter = (value: ButtonType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (id: string) => {
        taskRemove(id)
    }
    const onChangeInputHandler = (id:string, value:boolean)=>{
        changeCheckbox(id, value)
    }

    const mapTasks = tasks.map((task) => {
        return (<li key={task.id} className={task.isDone?styles.isDone:''}>
            <Button name={'x'} callback={() => removeTaskHandler(task.id)}/>
            <Checkbox callback={(isDoneValue)=>onChangeInputHandler(task.id, isDoneValue)} checked={task.isDone}/>
            <span>{task.title}</span>
        </li>)
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input className={error? styles.error:''} ref={myRef} type={"text"} onKeyDown={onKeyDownHandler}/>
                <Button name={'+'} callback={inputHandler}/>
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
            <ul>
                <li>{mapTasks}</li>
            </ul>
            <div>
                <Button name={'All'} callback={() => changeFilter('All')} buttonValue={buttonValue==='All'? buttonValue : '' }/>
                <Button name={'Active'} callback={() => changeFilter('Active')} buttonValue={buttonValue==='Active'? buttonValue : '' }/>
                <Button name={'Completed'} callback={() => changeFilter('Completed')} buttonValue={buttonValue==='Completed'? buttonValue : '' }/>
            </div>
        </div>
    )
}