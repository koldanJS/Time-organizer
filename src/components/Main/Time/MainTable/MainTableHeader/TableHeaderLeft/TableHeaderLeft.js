import React from 'react'
import { useSimpledStore } from '../../../../../../functions/functions'
import { changeData } from '../../../../../../redux/actions/appStateActions/timeStateActions'
import LeftRightBtn from '../../../../../UI/LeftRightBtn/LeftRightBtn'
import images from '../../../../../img/img'
import './TableHeaderLeft.css'

const TableHeaderLeft = () => {

    const { offset, selectedDate, dispatch } = useSimpledStore()

    const getDate = () => {
        if (offset) return `${selectedDate.dayOfMonth} ${selectedDate.monthDayShort}`
        return `${selectedDate.day}, ${selectedDate.dayOfMonth} ${selectedDate.monthDayShort}`
    }

    const clickHandler = (offset) => {
        dispatch(changeData(offset))
    }

    return (
        <div className='table-header-left' >
            <div className='left-right-btn arrow' >
                <LeftRightBtn classList='text btn-left arrow' clickHandler={ () => clickHandler(-1) } >
                    <img src={ images.arrowLeft } alt='Arrow' />
                </LeftRightBtn>
                <LeftRightBtn classList='text btn-right arrow' clickHandler={ () => clickHandler(1) } >
                    <img src={ images.arrowRight } alt='Arrow' />
                </LeftRightBtn>
            </div>
            <p className='text size-22 width-700' >{selectedDate.localDay}</p>
            <p className='text size-22' >{getDate()}</p>
            {
                offset
                    ? <a className='text link' onClick={() => clickHandler(-offset)} >Вернуться к сегодня</a>
                    : null
            }
        </div>
    )
}

export default TableHeaderLeft