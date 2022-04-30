import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSimpledStore } from '../../../functions/functions'
import ProjectItem from './ProjectItem/ProjectItem'
import images from '../../img/img'
import './Projects.css'

const Projects = () => {

    const navigate = useNavigate()
    const { isAuth, user } = useSimpledStore()
    const projectsId = user.projectsId

    useEffect(() => {
        if (!isAuth){
           return navigate("/auth");
        }
     });

    return (
        <div className='projects' >
            <button
                className='new'
                onClick={ () => navigate("/projects/new") }
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
                {
                    projectsId?.map( id => <ProjectItem key={ id } id={id} /> )
                }
            </ul>
        </div>
    )
}

export default Projects