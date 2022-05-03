import React from 'react'
import './Message.css'

const Message = ({message}) => {

    

    return (
        <div className='projects-message' >
            <p className='text'>{message}</p>
        </div>
    )
}

export default Message