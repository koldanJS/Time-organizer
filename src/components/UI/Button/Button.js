import React from 'react'
import './Button.css'

const Button = (props) => {

    const classList = [
        'btn',
        props.classType
    ]

    return (
        <button
            onClick={props.clickHandler}
            className={classList.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button