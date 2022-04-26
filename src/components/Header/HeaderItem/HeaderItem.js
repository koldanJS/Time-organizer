import React from 'react'
import {NavLink} from 'react-router-dom'
import './HeaderItem.css'

const HeaderItem = ({ to, exact, label, classType, img }) => {

    const classList = ['header-item']
    if (classType) classList.push(classType)

    const getContent = () => {
        if (img) return <img src={img.src} alt={img.alt} />
        return label
    }

    return (
        <li className={classList.join(' ')} >
            <NavLink
                to={to}
                exact={exact}
                className='text'
            >
                { getContent() }
            </NavLink>
        </li>
    )
}

export default HeaderItem