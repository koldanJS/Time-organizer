import React from 'react'
import HeaderItem from '../HeaderItem/HeaderItem'

const HeaderRight = () => {

    const item = {
        title: 'Время',
        classType: 'tab',
        img: '',
        alt: '',
        menu: true
    }

    return (
        <div className='header-right'>
            <HeaderItem item={item} />
        </div>
    )
}

export default HeaderRight