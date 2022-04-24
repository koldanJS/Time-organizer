import React from 'react'
import { useDispatch } from 'react-redux'
import { changeData } from '../../../../redux/actions/appStateActions/timeStateActions'
import { getFormatTime, getTotalTime, useSimpledStore } from '../../../../functions/functions'
import DayItem from './DayItem/DayItem'
import DayTotal from './DayTotal/DayTotal'
import './MainTableDays.css'

const MainTableDays = () => {

    const { user, selectedDate, selectedWeek, dispatch } = useSimpledStore()

    const getDayItems = () => {     //Исправить этот ужас!!!
        return [
            {isActive: selectedDate.dayNumber === 1, isTimeOn: true, day: 'Пн', totalTime: getTotalTime(1, user, selectedWeek)},
            {isActive: selectedDate.dayNumber === 2, isTimeOn: false, day: 'Вт', totalTime: getTotalTime(2, user, selectedWeek)},
            {isActive: selectedDate.dayNumber === 3, isTimeOn: false, day: 'Ср', totalTime: getTotalTime(3, user, selectedWeek)},
            {isActive: selectedDate.dayNumber === 4, isTimeOn: false, day: 'Чт', totalTime: getTotalTime(4, user, selectedWeek)},
            {isActive: selectedDate.dayNumber === 5, isTimeOn: false, day: 'Пт', totalTime: getTotalTime(5, user, selectedWeek)},
            {isActive: selectedDate.dayNumber === 6, isTimeOn: false, day: 'Сб', totalTime: getTotalTime(6, user, selectedWeek)},
            {isActive: selectedDate.dayNumber === 7, isTimeOn: false, day: 'Вс', totalTime: getTotalTime(7, user, selectedWeek)},
        ]
    }
    const dayItems = getDayItems()

    const getFormatTotalTime = () => {
        const totalTime = dayItems.reduce((sum, item) => {
            return sum += item.totalTime
        }, 0)
        return getFormatTime(totalTime)
    }

    const clickHandler = index => {
        const selectedDayNumber = selectedDate.dayNumber
        const newSelectedDayNumber = index
        dispatch(changeData(newSelectedDayNumber - selectedDayNumber))
    }
    
    return (
        <div className='main-table-days'>
            {
                dayItems.map((item, index) => {
                    return <DayItem key={index} clickHandler={() => clickHandler(index + 1)} {...item} />
                })
            }
            <DayTotal totalTime={getFormatTotalTime()} />
        </div>
    )
}

export default MainTableDays