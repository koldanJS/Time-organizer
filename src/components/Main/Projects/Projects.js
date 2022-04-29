import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSimpledStore } from '../../../functions/functions'
import './Projects.css'

const Projects = () => {

    const { isAuth } = useSimpledStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth){
           return navigate("/auth");
        }
     });

    return (
        <div className='home' >
            <h1>Projects</h1>
        </div>
    )
}

export default Projects