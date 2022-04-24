import React from 'react'
import './AddTaskForm.css'

const AddTaskForm = ({ clickHandler }) => {

    

    return (
        <div className='add-task-form'>
            <a href='#' onClick={clickHandler} >
                Закрыть
            </a>
        </div>
    )
}

export default AddTaskForm