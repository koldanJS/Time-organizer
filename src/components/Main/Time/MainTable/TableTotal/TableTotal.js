import React from 'react'
import TextItem from '../../../../TextItem/TexItem'
import Button from '../../../../UI/Button/Button'
import { getFormatTime, getTotalTime, msPerMin, useSimpledStore, getAddition } from '../../../../../functions/functions'
import './TableTotal.css'

const TableTotal = () => {

    const { user, selectedDate, selectedWeek } = useSimpledStore()

    const time = getFormatTime(getTotalTime(selectedDate.dayNumber, user, selectedWeek) + getAddition( user, selectedWeek ))

    const content = {title: 'Отправить недельный отчет', img: '', isAnimate: false}

    return (
        <div className='table-total'>
            <div className='total' >
                <TextItem classes={['size-20', 'width-700']} text='Итого:' />
                <TextItem classes={['size-20', 'width-700']} text={time} />
            </div>
            <div className='submit-week' >
                <Button content={content} />
            </div>
        </div>
    )
}

export default TableTotal