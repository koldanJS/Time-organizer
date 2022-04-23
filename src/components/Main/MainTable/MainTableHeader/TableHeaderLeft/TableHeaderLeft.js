import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDate } from '../../../../../redux/actions/appStateActions/timeStateActions'
import TextItem from '../../../../TextItem/TexItem'
import LeftRightBtn from '../../../../UI/LeftRightBtn/LeftRightBtn'
import './TableHeaderLeft.css'

const TableHeaderLeft = () => {

    const { offset, selectedDate } = useSelector(store => store.timeState)
    const dispatch = useDispatch()

    const getDate = () => {
        if (offset) return `${selectedDate.dayOfMonth} ${selectedDate.monthDayShort}`
        return `${selectedDate.day}, ${selectedDate.dayOfMonth} ${selectedDate.monthDayShort}`
    }

    const clickHandler = (direction) => {
        dispatch(changeDate(direction))
    }

    return (
        <div className='table-header-left' >
            <LeftRightBtn classType='arrow' clickHandler={clickHandler} />
            <TextItem classes={['size-22', 'width-700']} text={selectedDate.localDay} />
            <TextItem classes={['size-22']} text={getDate()} />
        </div>
    )
}

export default TableHeaderLeft