import React from 'react'
import './ButtonForm.css'

function ButtonForm(props) {

    const classList = [
        'Button',
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

export default ButtonForm