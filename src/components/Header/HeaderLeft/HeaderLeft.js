import React from 'react'
import HeaderItem from './HeaderItem/HeaderItem'
import './HeaderLeft.css'

const HeaderLeft = () => {

    const headerItems = ['HeaderItem', 'HeaderItem', 'HeaderItem']

    return (
        <div className='header-left'>
            {headerItems.map((item, index) => <HeaderItem key={index} item={item} />)}
        </div>
    )
}

export default HeaderLeft