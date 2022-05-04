import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Archive.css'

const Archive = () => {

    const navigate = useNavigate()

    return (
        <div className='archive'>
            <h1 className='text size-30 width-700 header' >Архив недельных отчетов</h1>
            <h2 className='text head-item' >Временной промежуток</h2>
            <ul>
                <li className='archive-item' >
                    <button className='text' onClick={ () => navigate('/time/week/2022-5-2-2022-5-8') } >
                        2 Май 2022 - 8 Май 2022
                    </button>
                    <hr className='demiliter' />
                </li>
            </ul>
        </div>
    )
}

export default Archive