import React from 'react'
import TextItem from '../../TextItem/TexItem'
import images from '../../img/img'
import './NewEntryBtn.css'

const NewEntryBtn = () => {

    

    return (
        <button className='new-entry-btn'>
            <div className='bg'>
                <img src={images.addLogo} alt='new-entry' />
            </div>
            <TextItem classes={['size-16']} text='Новая запись' />
        </button>
    )
}

export default NewEntryBtn