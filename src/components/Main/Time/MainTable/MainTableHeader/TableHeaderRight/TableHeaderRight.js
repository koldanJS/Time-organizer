import React from 'react'
import images from '../../../../../img/img'
import Button from '../../../../../UI/Button/Button'
import LeftRightBtn from '../../../../../UI/LeftRightBtn/LeftRightBtn'
import './TableHeaderRight.css'

const TableHeaderRight = () => {

    

    return (
        <div className='table-header-right' >
            <Button
                classType='calendar'
            >
                <img src={images.calendarLogo} alt='Calendar' />
            </Button>
            <LeftRightBtn classType='day-week' />
        </div>
    )
}

export default TableHeaderRight