import React from "react";


type ButtonTypeProps = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonTypeProps) => {
    const onCLickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onCLickHandler}>{props.name}</button>
    )
}