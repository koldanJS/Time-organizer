import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { loadingData } from '../redux/actions/appStateActions/appStateActions'
import { asyncGetProjects } from '../redux/actions/projectActions'
import { asyncGetTasks } from '../redux/actions/taskActions'
import { asyncGetUser } from '../redux/actions/userActions'

// Quiz.js  //Использовать, чтоб подсвечивать вкладки, соответствующие пути
// import {useLocation} from 'react-router-dom'
// const location = useLocation()
// const path = location.pathname.replace('/quiz', '')

export const useSimpledStore = () => {
    const { appState, user, projects, tasks, timeState } = useSelector(store => store)
    const { isAuth ,email, token, userId, isLoading, isAddFormOn, isEditFormOn, isReload } = appState
    const { offset, activeTaskId, currentDate, selectedDate, selectedWeek } = timeState
    const dispatch = useDispatch()
    return {
        appState,
        isAuth,
        email,
        token,
        userId,
        isLoading,
        isAddFormOn,
        isEditFormOn,
        isReload,
        user,
        projects,
        tasks,
        timeState,
        offset,
        activeTaskId,
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

    const getData = async (id) => {
        try {
            dispatch(loadingData(true))
            const { projectsId, tasksId } = await dispatch(asyncGetUser( id ? id : userId ))
            await dispatch(asyncGetProjects(projectsId))
            await dispatch(asyncGetTasks(tasksId))
            dispatch(loadingData(false))
        } catch(e) {
            console.log('Ошибка getData ', e)
        }
    }
    const getUpdate = async () => {
        try {
            const { projectsId, tasksId } = await dispatch(asyncGetUser(userId))
            await dispatch(asyncGetProjects(projectsId))
            await dispatch(asyncGetTasks(tasksId))
        } catch(e) {
            console.log('Ошибка getUpdate ', e)
        }
    }
    const getUpdateCurrent = async (getFunc, currentId) => {
        try {
            await dispatch(getFunc(currentId))
        } catch(e) {
            console.log('Ошибка getUpdateCurrent для', getFunc, e)
        }
    }

    return {
        getData,
        getUpdate,
        getUpdateCurrent
    }
}

export const getNewUserData = (userId) => {
    const projectId = v4()
    const tasksId = [v4(), v4(), v4()]
    const newUser = {
        info: {
            firstName: 'User',
            lastName: '',
            email: '',
            dateOfBirth: '',
            phoneNumber: '',
            company: '',
            photo: null,
        },
        projectsId: [projectId],
        tasksId: tasksId,
        activeEntry: null,
        timesSheets: {},
        pendingApproval: {},
        archive: {}
    }
    const project = {
        createdBy: userId,
        createdTime: Date.now(),
        description: 'Это простой проект для начала работы',
        projectName: 'Стартовый проект',
        tasksId
    }
    const tasks = [
        {
            createdBy: userId,
            projectId,
            taskName: 'Работа с документацией'
        },
        {
            createdBy: userId,
            projectId,
            taskName: 'Работа над проектом'
        },
        {
            createdBy: userId,
            projectId,
            taskName: 'Совещание'
        }
    ]
    return {
        newUser,
        project,
        projectId,
        tasks,
        tasksId
    }
}

export const changeActiveEntry = async ( offset, user, userId, getDateString, axiosHandler, getUpdate, index = -1 ) => {
    try {
        //Для активной записи можно при рендеринге всегда писать время total + Date.now() - startTime
        //lastActiveEntry
        //Общее событие stopTracking - срабатывает при нажатии СТОП и при том, если во время рендеринга окажется, что dateString не за сегодня
        //Каждую минуту будет происходить ререндеринг(если есть активная запись), при этом и все условия будут перепроверяться и время в активной записи обновляться
        if (!offset) {
            const timesSheets = user?.timesSheets || {}
            const newEntryNumber = (index < 0) ? (timesSheets[getDateString()]?.length || 0) : index
            const newActiveEntry = { entryNumber: newEntryNumber, timesSheetId: getDateString(), startTime: Date.now() }
            const urlEnd = `/users/${userId}/activeEntry.json`
            await axiosHandler.put(urlEnd, newActiveEntry)
            if (getUpdate) await getUpdate()
        }
    } catch(e) {
        console.log('Не могу записать newActiveEntry: ', e)
    }
}

export const stopTracking = async ( user, userId, getDateString, axiosHandler, getUpdate, isTomorrow ) => {
    try {
        const { startTime, entryNumber } = user.activeEntry
        const addition = Math.round( (Date.now() - startTime) / msPerMin )
        const currentDateString = getDateString(isTomorrow ? -1 : 0)
        const timesSheet = user.timesSheets[currentDateString]
        const newTimesSheet = timesSheet.map((item, index) => {
            if (entryNumber === index) return {...item, totalTime: item.totalTime + addition}
            return item
        })
        let urlEnd = `/users/${userId}/timesSheets/${currentDateString}.json`
        await axiosHandler.put(urlEnd, newTimesSheet)
        urlEnd = `/users/${userId}/activeEntry.json`
        await axiosHandler.delete(urlEnd)
        await getUpdate()
        return newTimesSheet
    } catch(e) {
        console.log('Не могу записать newTimesSheet (stopTracking): ', e)
    }
}

export const getAddition = ( user, selectedWeek, timesSheetId = false ) => {
    const isActive = (
        user?.activeEntry &&     //Что есть активные записи
        selectedWeek.indexOf(user.activeEntry?.timesSheetId) !== -1     //Активная запись входит в текущую неделю
    )
    if (timesSheetId && timesSheetId !== user?.activeEntry?.timesSheetId) return 0  //Если передали timesSheetId, то обязано быть совпадение
    if (isActive) return Math.round( (Date.now() - user.activeEntry?.startTime) / msPerMin )
    return 0
}

export const msPerDay = 1000*3600*24
export const msPerMin = 1000*60

export const getDate = (offset) => {
    const shortDays = [
        null,
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
    ]
    const days = [
        null,
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