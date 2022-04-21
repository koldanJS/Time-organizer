import React from 'react'
import DayItem from './DayItem/DayItem'
import DayTotal from './DayTotal/DayTotal'
import './MainTableDays.css'

const MainTableDays = () => {

    const dayItems = [
        {classActive: 'active', isTimeOn: true, day: 'Пн', time: '8:30'},
        {classActive: '', isTimeOn: false, day: 'Вт', time: '0:00'},
        {classActive: '', isTimeOn: false, day: 'Ср', time: '0:00'},
        {classActive: '', isTimeOn: false, day: 'Чт', time: '0:00'},
        {classActive: '', isTimeOn: false, day: 'Пт', time: '0:00'},
        {classActive: '', isTimeOn: false, day: 'Сб', time: '0:00'},
        {classActive: '', isTimeOn: false, day: 'Вс', time: '0:00'},
    ]

    return (
        <div className='main-table-days'>
            {
                dayItems.map((item, index) => {
                    return <DayItem key={index} {...item} />
                })
            }
            <DayTotal totalTime='8:30' />
        </div>
    )
}

export default MainTableDays