import React from 'react'
import TextItem from '../../TextItem/TexItem'
import images from '../../img/img'
import './NewEntryBtn.css'
import AddTaskForm from '../AddTaskForm/AddTaskForm'

const NewEntryBtn = ({clickHandler}) => {



    return (
        <button className='new-entry-btn' onClick={clickHandler} >
            <div className='bg'>
                <img src={images.addLogo} alt='new-entry' />
            </div>
            <TextItem classes={['size-16']} text='Новая запись' />
        </button>
    )
}

export default NewEntryBtn