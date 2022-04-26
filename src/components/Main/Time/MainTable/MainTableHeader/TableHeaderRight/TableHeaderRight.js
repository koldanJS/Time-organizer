import React from 'react'
import Button from '../../../../../UI/Button/Button'
import LeftRightBtn from '../../../../../UI/LeftRightBtn/LeftRightBtn'
import './TableHeaderRight.css'

const TableHeaderRight = () => {

    const btnProps = {  //Параметры кнопки, чтоб удобно распространить в компонент
        content: {
            title: '', img: {name: 'calendarLogo', alt: 'Calendar'}
        },
        classType: 'calendar'
    }

    return (
        <div className='table-header-right' >
            <Button {...btnProps} />
            <LeftRightBtn classType='day-week' />
        </div>
    )
}

export default TableHeaderRight