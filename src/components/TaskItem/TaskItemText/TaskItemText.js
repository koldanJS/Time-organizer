import React from 'react'
import './TaskItemText.css'
import TextItem from '../../TextItem/TexItem'

const TaskItemText = ({
    keyName,
    projectName,
    executor,
    taskName
}) => {

    // const styles = [
    //     'table-item-left',
    //     'head'

    // ]

    return (
        <div className='table-item-left'>
            <div className='head'>
                <TextItem classes={['text', 'width-700']} text={keyName} />
                <TextItem classes={['text', 'width-700']} text={projectName} />
                <TextItem classes={['text']} text={executor} />
            </div>
            <TextItem classes={['text']} text={taskName} />
        </div>
    )
}

export default TaskItemText