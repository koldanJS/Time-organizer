import React, { useState } from 'react'
import { useSimpledStore } from '../../../functions/functions'
import ProjectItem from './ProjectItem/ProjectItem'
import NewProjectItem from './NewProjectItem/NewProjectItem'
import Loader from '../../Loader/Loader'
import images from '../../img/img'
import './Projects.css'
import { v4 } from 'uuid'
import Message from '../../UI/Message/Message'

const Projects = () => {

    const { user, isLoading } = useSimpledStore()

    const [isAddNewProject, setIsAddNewProject] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [message, setMessage] = useState(false)
    
    const projectsId = user.projectsId

    const showMessage = () => {
        setTimeout(() => {
            setMessage(false)
        }, 3000);
        return <Message message={message} type='error' />
    }

    const getItems = () => {

        const getProjectItems = () => projectsId.map( id => <ProjectItem
            key={ id }
            projectId={ id }
            isEdit={ isEdit }
            changeIsEdit={ setIsEdit }
            isAddNewProject={ isAddNewProject }
            setMessage={ setMessage }
        /> )

        if (isLoading) return (
            <div className='projects-loader' >
                <Loader />
            </div>
        )
        if (isAddNewProject) return (
            <>
                <NewProjectItem
                    cancelProjectAddition={ () => setIsAddNewProject(false) }
                    newProjectId={ v4() }
                />
                { getProjectItems() }
            </>
        )
        return getProjectItems()
    }

    const addNewProjectStart = () => {
        if (isEdit) return setMessage('Сначала завершите редактирование проекта')
        setIsAddNewProject(true)
    }

    return (
        <div className='projects' >
            <div className='projects-top' >
                <button
                    className='new'
                    onClick={ addNewProjectStart }
                >
                        <img
                            src={images.whitePlusLogo}
                            alt='Plus'
                        />
                    <p className='text size-20 color-white' >Новый проект</p>
                </button>
                {
                    message
                        ? showMessage()
                        : null
                }
            </div>
            <hr className='demiliter' />
            <ul className='projects-header' >
                <li className='text editor' >
                    <img
                        src={images.gearsLogo}
                        alt='Gears'
                    />
                </li>
                <li className='text' >Название проекта</li>
                <li className='text description' >Описание</li>
                <li className='text tasks' >Список задач</li>
            </ul>
            <ul className='projects-lits' >
                { getItems() }
            </ul>
        </div>
    )
}

export default Projects