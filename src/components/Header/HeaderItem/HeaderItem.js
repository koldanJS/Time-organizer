import React from 'react'
import './HeaderItem.css'
import images from '../../img/img'
import UserMenu from '../HeaderRight/UserMenu/UserMenu'

const HeaderItem = ({item}) => {

    const getContent = () => {
        if (item.img) return <img src={images[item.img]} alt={item.alt} />
        if (item.menu) return <UserMenu />
        return item.title 
    }

    return (
        <nav className={item.classes.join(' ')} >
            <a href='#' className='text'>
                { getContent() }
            </a>
        </nav>
    )
}

export default HeaderItem