import React from 'react'
import './TexItem.css'

const TextItem = ({classes, text}) => {

    return (
        <p className={classes.join(' ')} >
            {text}
        </p>
    )
}

export default TextItem