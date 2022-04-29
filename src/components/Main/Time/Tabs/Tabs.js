import React from 'react'
import TabItem from './TabItem/TabItem'
import './Tabs.css'

const Tabs = () => {

    const tabs = [
        {
            title: 'Табель учета рабочего времени',
            activeClass: 'active'
        },
        {
            title: 'В ожидании утверждения',
            activeClass: ''
        },
        {
            title: 'Архив',
            activeClass: ''
        }
    ]

    return (
        <div className='tabs'>
            {
                tabs.map((tab, index) => <TabItem key={index} {...tab} />)
            }
        </div>
    )
}

export default Tabs