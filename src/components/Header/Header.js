import React from 'react'
import './Header.css'
import UserMenu from './UserMenu/UserMenu'
import HeaderItem from './HeaderItem/HeaderItem'
import images from '../img/img'
import { useSimpledStore } from '../../functions/functions'

const Header = () => {

    const { user } = useSimpledStore()
    const userInfo = user.info

    const menuProps = { img: images.arrowLogo }
    
    if (userInfo) {
        menuProps.abbr = userInfo.firstName[0] + userInfo.lastName[0]
        menuProps.name = userInfo.firstName
    }

    const headerItems = [
        {to: '/', exact: 'true', label: '', classType: 'home', img: {src: images.homeLogo, alt: 'Home'}},
        {to: '/time', exact: 'false', label: 'Время', classType: 'tab', img: ''},
        {to: '/projects', exact: 'false', label: 'Проект', classType: 'tab', img: ''}
    ]

    return (
        <header>
            <div className='container'>
                <nav>
                    <ul className="header-list">
                        { headerItems.map(item => <HeaderItem key={item.to} {...item} />) }
                    </ul>
                </nav>
                <nav className='header-item menu' >
                    <button>
                        <UserMenu {...menuProps} />
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header