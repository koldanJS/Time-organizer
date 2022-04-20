import React from 'react'
import TextItem from '../../TextItem/TexItem'
// import './TaskItem.css'

const TaskItemControl = () => {



    return (
        <div className='table-item-right'>
            <TextItem classes={['text', 'size-20', 'width-700']} text='2:14' />
            <button>
                Start
            </button>
            <button>
                Edit
            </button>
        </div>
    )
}

export default TaskItemControl