import React from 'react'
import { useSimpledStore } from '../../../../functions/functions.js'
import { useSelector } from 'react-redux'
import TextItem from '../../../TextItem/TexItem.js'
import images from '../../../img/img'
import './UserMenu.css'

const UserMenu = () => {

    const { user } = useSimpledStore()
    const userInfo = user.info

    const menuItem = [
        {
            title: "ФИ",
            className: 'circle',
            classes: ['size-20', 'width-900', 'color-white']
        },
        {
            title: "Firstname",
            className: 'user-name',
            classes: ['size-20']
        }
    ]
    
    if (userInfo) {
        menuItem[0].title = userInfo.firstName[0] + userInfo.lastName[0]
        menuItem[1].title = userInfo.firstName
    }

    return (
        <>
            {
                menuItem.map((item, index) => {
                    return (
                        <div key={index} className={item.className} >
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