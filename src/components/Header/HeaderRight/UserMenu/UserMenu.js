import React from 'react'
import TextItem from '../../../TextItem/TexItem.js'
import images from '../../../img/img'
import './UserMenu.css'

const UserMenu = () => {

    const menuItem = [
        {
            title: 'ФИ',
            class: 'circle',
            classes: ['size-20', 'width-900', 'color-white']
        },
        {
            title: 'Username',
            class: 'user-name',
            classes: ['size-20']
        }
    ]

    return (
        <>
            {
                menuItem.map((item, index) => {
                    return (
                        <div key={index} className={item.class} >
                            <TextItem classes={item.classes} text={item.title} />
                        </div>
                    )
                })
            }
            <div className='user-settings'>
                <img src={images.arrowLogo} alt='arrow'/>
            </div>
        </>
    )
}

export default UserMenu