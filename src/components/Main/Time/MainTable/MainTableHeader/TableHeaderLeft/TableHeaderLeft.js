import React from 'react'
import { useSimpledStore } from '../../../../../../functions/functions'
import { changeData } from '../../../../../../redux/actions/appStateActions/timeStateActions'
import TextItem from '../../../../../TextItem/TexItem'
import LeftRightBtn from '../../../../../UI/LeftRightBtn/LeftRightBtn'
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
            <LeftRightBtn classType='arrow' clickHandler={clickHandler} />
            <TextItem classes={['size-22', 'width-700']} text={selectedDate.localDay} />
            <TextItem classes={['size-22']} text={getDate()} />
            {
                offset
                    ? <a className='text link' onClick={() => clickHandler(-offset)} >Вернуться к сегодня</a>
                    : null
            }
        </div>
    )
}

export default TableHeaderLeft