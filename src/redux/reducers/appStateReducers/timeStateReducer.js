import { CHANGE_DATE } from "../../types/appStateTypes/timeStateTypes"

const msPerDay = 1000*3600*24

const getDate = (offset) => {
    const shortDays = [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб'
    ]
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]
    const monthDay = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]
    const monthDayShort = [
        'Янв',
        'Сен',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек'
    ]
    const now = offset ? new Date(Date.now() + offset*msPerDay) : new Date()
    const localDay = offset ? `${days[now.getDay()]},` : 'Сегодня:'
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        monthDay: monthDay[now.getMonth()],
        monthDayShort: monthDayShort[now.getMonth()],
        dayOfMonth: now.getDate(),
        dayNumber: now.getDay(),
        day: days[now.getDay()],
        dayShort: shortDays[now.getDay()],
        localDay
    }
}

console.log(getDate(+1))

const initialState = {
    offset: 0,
    currentDate: getDate(),
    selectedDate: getDate(),
}

const timeStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_DATE: {
            const newOffset = state.offset + action.payload
            return {...state, selectedDate: getDate(newOffset), offset: newOffset}
        }
        default: return state
    }
}

export default timeStateReducer