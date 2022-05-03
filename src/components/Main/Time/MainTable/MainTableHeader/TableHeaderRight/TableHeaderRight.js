import React from 'react'
import images from '../../../../../img/img'
import Button from '../../../../../UI/Button/Button'
import LeftRightBtn from '../../../../../UI/LeftRightBtn/LeftRightBtn'
import Calendar from '../../../../../UI/Calendar/Calendar'
import './TableHeaderRight.css'

const TableHeaderRight = () => {

    const addCalendar = () => {
        //Компонент еще не готов
    }

    return (
        <div className='table-header-right' >
            <Button
                classType='calendar-btn'
                clickHandler={ addCalendar }
            >
                <img src={images.calendarLogo} alt='Calendar' />
            </Button>
            <LeftRightBtn classType='day-week' />
        </div>
    )
}

export default TableHeaderRight