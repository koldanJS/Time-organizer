import React from 'react'
import './HeaderItem.css'
import images from '../../img/img'
import UserMenu from '../HeaderRight/UserMenu/UserMenu'

const HeaderItem = ({item}) => {

    const classList = ['header-item']
    if (item.classType) classList.push(item.classType)

    const getContent = () => {
        if (item.img) return <img src={images[item.img.name]} alt={item.img.alt} />
        if (item.menu) return <UserMenu />
        return item.title 
    }

    return (
        <nav className={classList.join(' ')} >
            <a href='#' className='text'>
                { getContent() }
            </a>
        </nav>
    )
}

export default HeaderItem