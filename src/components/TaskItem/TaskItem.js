import React from 'react'
import './TaskItem.css'
import TaskItemControl from './TaskItemControl/TaskItemControl'
import TaskItemText from './TaskItemText/TaskItemText'

const TaskItem = () => {

    const taskText = {
        keyName: '[key]',
        projectName: 'Название проекта',
        executor: '(исполнитель)',
        taskName: 'Название задачи'
    }

    return (
        <div className='table-item'>
            <TaskItemText {...taskText} />
            <TaskItemControl />
        </div>
    )
}

export default TaskItem