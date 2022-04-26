import { useSelector, useDispatch } from 'react-redux'
import { loadingData } from '../redux/actions/appStateActions/appStateActions'
import { asyncGetProjects } from '../redux/actions/projectActions'
import { asyncGetTasks } from '../redux/actions/taskActions'
import { asyncGetUser } from '../redux/actions/userActions'

export const useSimpledStore = () => {
    const { appState, user, projects, tasks, timeState } = useSelector(store => store)
    const { userId, isLoading, isAddFormOn } = appState
    const { offset, currentDate, selectedDate, selectedWeek } = timeState
    const dispatch = useDispatch()
    return {
        appState,
        userId,
        isLoading,
        isAddFormOn,
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

export const useUpdate = () => {
    const { appState } = useSelector(store => store)
    const { userId } = appState
    const dispatch = useDispatch()

    const getData = async () => {
        dispatch(loadingData(true))
        const { projectsId, tasksId } = await dispatch(asyncGetUser(userId))
        await dispatch(asyncGetProjects(projectsId))
        await dispatch(asyncGetTasks(tasksId))
        dispatch(loadingData(false))
      }

    return {
        getData
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
export const getTimeNumber = (timeString) => {
    if (timeString.indexOf(':') === -1) return Number(timeString)*60
    const [ hours, minutes ] = timeString.split(':')
    return Number(hours)*60 + Number(minutes)
}
export const controlTime = (timeString) => {
    switch (timeString.length) {
        case 0: return true
        case 1: return timeString.search(/^[0-9]$/) + 1
        case 2: return timeString.search(/^(([0-1]?[0-9]|2[0-3])|([0-9]:))$/) + 1
        case 3: return timeString.search(/^(([0-1]?[0-9]|2[0-3]):|([0-9]:[0-9]))$/) + 1
        case 4: return timeString.search(/^(([0-1]?[0-9]|2[0-3]):[0-9]|([0-9]:[0-5][0-9]))$/) + 1
        case 5: return timeString.search(/^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/) + 1
        default: return false
    }
}