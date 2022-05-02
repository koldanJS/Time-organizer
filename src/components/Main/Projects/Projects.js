import React, { useState } from 'react'
import { useSimpledStore } from '../../../functions/functions'
import ProjectItem from './ProjectItem/ProjectItem'
import NewProjectItem from './NewProjectItem/NewProjectItem'
import Loader from '../../Loader/Loader'
import images from '../../img/img'
import './Projects.css'
import { v4 } from 'uuid'

const Projects = () => {

    const { user, isLoading } = useSimpledStore()

    const [isAddNewProject, setIsAddNewProject] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    
    const projectsId = user.projectsId

    const getItems = () => {
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
                { projectsId.map( id => <ProjectItem
                    key={ id }
                    projectId={ id }
                    isEdit={ isEdit }
                    changeIsEdit={ setIsEdit }
                /> ) }
            </>
        )
        return projectsId.map( id => <ProjectItem
            key={ id }
            projectId={ id }
            isEdit={ isEdit }
            changeIsEdit={ setIsEdit }
        /> )
    }

    return (
        <div className='projects' >
            <button
                className='new'
                onClick={ () => setIsAddNewProject(true) }
            >
                    <img
                        src={images.whitePlusLogo}
                        alt='Plus'
                    />
                <p className='text size-20 color-white' >Новый проект</p>
            </button>
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