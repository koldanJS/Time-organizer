import React from 'react'
import HeaderItem from '../HeaderItem/HeaderItem'
import './HeaderLeft.css'

const HeaderLeft = () => {

    const headerItems = [
        {title: '', classes: ['header-item', 'home'], img: 'homeLogo', alt: 'Home', menu: false},
        {title: 'Время', classes: ['header-item', 'tab'], img: '', alt: '', menu: false},
        {title: 'Проект', classes: ['header-item', 'tab'], img: '', alt: '', menu: false}
    ]

    return (
        <div className='header-left'>
            {headerItems.map((item, index) => <HeaderItem key={index} item={item} />)}
        </div>
    )
}

export default HeaderLeft