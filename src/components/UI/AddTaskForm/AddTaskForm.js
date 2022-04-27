import React, { useState } from 'react'
import { getFormatTime, getTimeNumber, controlTime, useSimpledStore, getDateString, useUpdate, changeActiveEntry, stopTracking } from '../../../functions/functions'
import { offAddForm } from '../../../redux/actions/appStateActions/appStateActions'
import axiosHandler from '../../../axios/axiosHandler'
import TextItem from '../../TextItem/TexItem'
import ButtonForm from '../ButtonForm/ButtonForm'
import Select from '../Select/Select'
import './AddTaskForm.css'
import { asyncGetUser } from '../../../redux/actions/userActions'

const AddTaskForm = ({ closeFormHandler }) => {

    const { userId, user, projects, tasks, offset, selectedDate, dispatch } = useSimpledStore()
    const { getUpdate, getUpdateCurrent } = useUpdate()

    const [currentProjectId, setCurrentProjectId] = useState(user.projectsId[0])
    const [currentTaskId, setCurrentTaskId] = useState(user.tasksId[0])
    const [description, setDescription] = useState('')
    const [timeString, setTimeString] = useState('')
   
    const getTextItem = (keyName, name, client) => {
        if (keyName) return `[${keyName}] ${name} (${client})`
        return `${name} (${client})`
    }
    
    const getProjectsOptions = () => user.projectsId.map(id => {
        const project = projects[id]
        return {
            id,
            text: getTextItem(project.keyName, project.projectName, project.client)
        }
    })
    const getTasksOptions = (projectId) => projects[projectId].tasksId.map(id => {
        return {
            id,
            text: tasks[id].taskName,
        }
    })

    const getText = () => {
        return `Новая запись на ${selectedDate.day.toLowerCase()}, ${selectedDate.dayOfMonth} ${selectedDate.monthDayShort.toLowerCase()}`
    }

    const changeHandler = (event, setState, control) => {
        const newValue = event.target.value
        if (control && !control(newValue)) return
        setState(newValue)
    }

    const blurHandler = () => {
        const timeNumber = getTimeNumber(timeString)
        const newTimeString = getFormatTime(timeNumber)
        setTimeString(newTimeString)
    }

    const createEntry = async (newTimesSheet, currentDateString) => {
        try {
            await changeActiveEntry( offset, user, userId, getDateString, axiosHandler )
            const urlEnd = `/users/${userId}/timesSheets/${currentDateString}.json`
            await axiosHandler.put(urlEnd, newTimesSheet)
            getUpdateCurrent(asyncGetUser, userId)
        } catch(e) {
            console.log('Не могу записать newTimesSheet: ', e)
        }
    }

    const submitHandler = async event => {
        event.preventDefault()
        const newEntry = {
            description: description,
            isActive: !offset,
            projectId: currentProjectId,
            taskId: currentTaskId,
            totalTime: getTimeNumber(timeString)
        }
        const currentDateString = getDateString(offset)
        let timesSheet = user.timesSheets[currentDateString] || []    //Начальное значение массива, при любом смещении
        if ( !offset && user.activeEntry) {   //Если запись добавляют сегодня и если уже была активная,
            timesSheet = await stopTracking( user, userId, getDateString, axiosHandler, getUpdate ) //то нужно ее разактивировать и переписать ее время, вернув новый массив
        }
        const newTimesSheet = [...timesSheet, newEntry]
        await createEntry(newTimesSheet, currentDateString)
        dispatch(offAddForm())
    }

    return (
        <div className='hide-all' >
            <div className='add-task-form'>
                <div className='head' >
                    <TextItem text={getText()} />
                </div>
                <form onSubmit={submitHandler} >
                    <Select
                        label='Проект'
                        value={currentProjectId}
                        onChange={e => changeHandler(e, setCurrentProjectId)}
                        options={getProjectsOptions()}
                        classType=''
                    />
                    <Select
                        label='Задача'
                        value={currentTaskId}
                        onChange={e => changeHandler(e, setCurrentTaskId)}
                        options={getTasksOptions(currentProjectId)}
                        classType=''
                    />
                    <input
                        className='description text'
                        placeholder='Примечания (необязательно)'
                        value={description}
                        onChange={(e) => changeHandler(e, setDescription)}
                    />
                    <input
                        className='time text size-30'
                        placeholder='0:00'
                        value={timeString}
                        onChange={(e) => changeHandler(e, setTimeString, controlTime)}
                        onBlur={blurHandler}
                    />
                    {
                        offset
                            ? <ButtonForm
                                classType='success'
                                type='submit'
                                clickHandler={submitHandler}
                            >
                                <TextItem classes={['color-white']} text='Добавить запись' />
                            </ButtonForm>
                            : <ButtonForm
                                classType='success'
                                type='submit'
                                clickHandler={submitHandler}
                            >
                                <TextItem classes={['color-white']} text='Запустить таймер' />
                            </ButtonForm>
                    }
                    <ButtonForm
                        clickHandler={closeFormHandler}
                    >
                        <TextItem text='Отмена' />
                    </ButtonForm>
                </form>
            </div>
        </div>
    )
}

export default AddTaskForm