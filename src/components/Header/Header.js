import React from 'react'
import HeaderLeft from './HeaderLeft/HeaderLeft'
import HeaderRight from './HeaderRight/HeaderRight'
import './Header.css'

const Header = () => {

    

    return (
        <header>
            <div className='container'>
                <HeaderLeft />
                <HeaderRight />
            </div>
        </header>
    )
}

export default Header