import React from "react";
import styles from '../../Styles.module.css'
import {ButtonType} from "../../App";

type ButtonTypeProps = {
    name: string
    callback: () => void
    buttonValue?: ButtonType | ''
}

export const Button = (props: ButtonTypeProps) => {
    const {name, callback, buttonValue} = props
    const onCLickHandler = () => {
        callback()
    }

    return (
        <button className={buttonValue ? styles.activeFilter : ''} onClick={onCLickHandler}>{name}</button>
    )
}