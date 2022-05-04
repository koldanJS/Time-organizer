import React from 'react'
import './Archive.css'

const Archive = () => {



    return (
        <div className='archive'>
            <h1 className='text size-30 width-700 header' >Архив недельных отчетов</h1>
            <h2 className='text head-item' >Временной промежуток</h2>
            <ul>
                <li className='archive-item' >
                    <a className='text' >11 Apr 2022 - 17 Apr 2022</a>
                    <hr className='demiliter' />
                </li>
            </ul>
        </div>
    )
}

export default Archive