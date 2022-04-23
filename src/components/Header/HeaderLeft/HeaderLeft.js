import React from 'react'
import HeaderItem from '../HeaderItem/HeaderItem'
import './HeaderLeft.css'

const HeaderLeft = () => {

    const headerItems = [
        {title: '', classType: 'home', img: {name: 'homeLogo', alt: 'Home'}, menu: false},
        {title: 'Время', classType: 'tab', img: '',menu: false},
        {title: 'Проект', classType: 'tab', img: '',menu: false}
    ]

    return (
        <div className='header-left'>
            {headerItems.map((item, index) => <HeaderItem key={index} item={item} />)}
        </div>
    )
}

export default HeaderLeft