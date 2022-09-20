import React from "react";
import {ButtonType, TasksType} from "./App";

type Todolist = {
    title: string,
    tasks: Array<TasksType>,
    taskRemove: (id: number) => void,
    changeFilter: (name: ButtonType) => void
}

export const Todolist = (props: Todolist) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    {
                        props.tasks.map((task) => {
                            return <li key={task.id}>
                                <button onClick={() => {
                                    props.taskRemove(task.id)
                                }}>x
                                </button>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>
                        })
                    }
                </li>

            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('All')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter('Active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter('Completed')
                }}>Completed
                </button>
            </div>
        </div>
    )
}