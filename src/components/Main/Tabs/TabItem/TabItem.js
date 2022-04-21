import React from 'react'
import './TabItem.css'

const TabItem = ({title, activeClass}) => {

    const classes = ['tab-item']
    classes.push(activeClass)

    return (
        <nav className={classes.join(' ')} >
            <a href='#' className='text'>
                {title}
            </a>
        </nav>
    )
}

export default TabItem