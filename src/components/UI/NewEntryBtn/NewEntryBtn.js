import React from 'react'
import TextItem from '../../TextItem/TexItem'
import images from '../../img/img'
import './NewEntryBtn.css'
import AddTaskForm from '../AddTaskForm/AddTaskForm'

const NewEntryBtn = () => {

    const addTaskHandler = () => {
        const container = document.querySelector('#root')
        container.appendChild(<AddTaskForm clickHandler={clickHandler} />)
    }
    const clickHandler = () => {
        const container = document.querySelector('#root')
        container.removeChild(<AddTaskForm clickHandler={clickHandler} />)
    }

    return (
        <button className='new-entry-btn' onClick={addTaskHandler} >
            <div className='bg'>
                <img src={images.addLogo} alt='new-entry' />
            </div>
            <TextItem classes={['size-16']} text='Новая запись' />
        </button>
    )
}

export default NewEntryBtn