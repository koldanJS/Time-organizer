import { useSelector, useDispatch } from 'react-redux'

export const useSimpledStore = () => {
    const { isLoading, user, projects, tasks, timeState } = useSelector(store => store)
    const { offset, currentDate, selectedDate, selectedWeek } = useSelector(store => store.timeState)
    const dispatch = useDispatch()
    return {
        isLoading,
        user,
        projects,
        tasks,
        timeState,
        offset,
        currentDate,
        selectedDate,
        selectedWeek,
        dispatch
    }
}

export const msPerDay = 1000*3600*24

export const getDate = (offset) => {
    const shortDays = [
        ,
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
    ]
    const days = [
        ,
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
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
    const localDay = offset ? `${days[now.getDay() || 7]},` : 'Сегодня:'
    return {
        dateString: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        monthDay: monthDay[now.getMonth()],
        monthDayShort: monthDayShort[now.getMonth()],
        dayOfMonth: now.getDate(),
        dayNumber: now.getDay() || 7,
        day: days[now.getDay() || 7],
        dayShort: shortDays[now.getDay() || 7],
        localDay
    }
}

export const getRange = (offset) => {
    const now = offset ? new Date(Date.now() + offset*msPerDay) : new Date()
    const dayNumber = now.getDay() || 7
    return [-(dayNumber - 1), 7 - dayNumber]
}
export const getDateString = (offset) => {
    const now = offset ? new Date(Date.now() + offset*msPerDay) : new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}
export const getSelectedWeek = (offset) => {
    const range = getRange(offset)
    const selectedWeek = [null]
    for (let rangeOffset = range[0]; rangeOffset <= range[1]; rangeOffset++) {
        selectedWeek.push(getDateString(offset + rangeOffset))
    }
    return selectedWeek
}

export const getTotalTime = (dayNumber, user, selectedWeek) => {
    const timesSheets = user?.timesSheets || {}
    const timesSheet = timesSheets[selectedWeek[dayNumber]] || []
    const totalTime = timesSheet.reduce((total, item) => total += item.totalTime, 0)
    return totalTime
}

export const getFormatTime = (time, format = 'hh:mm') => {
    const hours = Math.floor(time/60)
    let minutes = time - hours*60
    if (minutes < 10) minutes = '0' + minutes
    const formatTime = format
        .replace('hh', hours)
        .replace('mm', minutes)
    return formatTime
}