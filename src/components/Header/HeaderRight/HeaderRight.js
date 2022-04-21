import React from 'react'
import HeaderItem from '../HeaderItem/HeaderItem'

const HeaderRight = () => {

    const item = {
        title: 'Время',
        classes: ['header-item', 'tab'],
        img: '',
        alt: '',
        menu: {
            
        }
    }

    return (
        <div className='header-right'>
            <HeaderItem item={item} />
        </div>
    )
}

export default HeaderRight