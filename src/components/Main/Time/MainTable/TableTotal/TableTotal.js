import React from 'react'
import TextItem from '../../../../TextItem/TexItem'
import Button from '../../../../UI/Button/Button'
import { getFormatTime, getTotalTime, useSimpledStore, getAddition, getSelectedWeek } from '../../../../../functions/functions'
import './TableTotal.css'

const TableTotal = () => {

    const { user, selectedDate, selectedWeek, offset } = useSimpledStore()

    const time = getFormatTime(getTotalTime(selectedDate.dayNumber, user, selectedWeek) + getAddition( user, selectedWeek ))

    const clickHandler = () => {
        console.log(getSelectedWeek(offset))
    }

    return (
        <div className='table-total'>
            <div className='total' >
                <TextItem classes={['size-20', 'width-700']} text='Итого:' />
                <TextItem classes={['size-20', 'width-700']} text={time} />
            </div>
            <div className='submit-week' >
                <Button clickHandler={ clickHandler } >
                    <TextItem text='Архивировать недельный отчет' />
                </Button>
            </div>
        </div>
    )
}

export default TableTotal