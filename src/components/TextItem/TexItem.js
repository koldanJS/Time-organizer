import React from 'react'
import './TexItem.css'

const TextItem = ({classes, text}) => {

    let classList = ['text']
    if (classes) classList = [...classList, ...classes]

    return (
        <p className={classList.join(' ')} >
            {text}
        </p>
    )
}

export default TextItem