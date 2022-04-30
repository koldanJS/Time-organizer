import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSimpledStore } from '../../../../functions/functions'
// import images from '../../img/img'
import './NewProject.css'

const NewProject = () => {

    const { isAuth } = useSimpledStore()
    const navigate = useNavigate()

    useEffect(() => { if (!isAuth) return navigate("/auth") })

    return (
        <div className='' >New Projects
            {/* <button onClick={ () => navigate("/projects/new") } >
                <img
                    // className='plus-logo'
                    src={images.whitePlusLogo}
                    alt='Plus'
                />
                <p className='text size-20 color-white' >Новый проект</p>
            </button>
            <hr className='demiliter' /> */}
            
        </div>
    )
}

export default NewProject