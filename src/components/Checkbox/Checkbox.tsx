import React, {ChangeEvent} from "react";

type CheckboxPropsType = {
    checked: boolean
    callback: (isDone: boolean) => void
}

export const Checkbox = (props: CheckboxPropsType) => {
    const {checked, callback} = props
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        callback(event.currentTarget.checked)
    }
    return (
        <input onChange={onChangeHandler} type="checkbox" checked={checked}/>
    )
}
