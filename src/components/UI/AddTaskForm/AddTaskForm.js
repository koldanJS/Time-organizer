import React, { useState } from 'react'
import { getFormatTime, getTimeNumber, controlTime, useSimpledStore, getDateString, useUpdate } from '../../../functions/functions'
import { offAddForm } from '../../../redux/actions/appStateActions/appStateActions'
import axiosHandler from '../../../axios/axiosHandler'
import TextItem from '../../TextItem/TexItem'
import ButtonForm from '../ButtonForm/ButtonForm'
import Select from '../Select/Select'
import './AddTaskForm.css'

const AddTaskForm = ({ closeFormHandler }) => {

    const { userId, user, projects, tasks, offset, dispatch } = useSimpledStore()
    const { getData } = useUpdate()

    const [currentProjectId, setCurrentProjectId] = useState(user.projectsId[0])
    const [currentTaskId, setCurrentTaskId] = useState(user.projectsId[0])
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

    const getText = () => {     //Сделать!
        return 'Новая запись на понедельник, 25 апр'
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
        const urlEnd = `/users/${userId}/timesSheets/${currentDateString}.json`
        console.log('urlEnd ', urlEnd)
        await axiosHandler.put(urlEnd, newTimesSheet)
    }

    const submitHandler = event => {
        event.preventDefault()
        const newEntry = {
            description: description,
            isActive: false,
            projectId: currentProjectId,
            tasksId: currentTaskId,
            totalTime: getTimeNumber(timeString)
        }
        const currentDateString = getDateString(offset)
        const TimesSheet = user.timesSheets[currentDateString] || []
        const newTimesSheet = [...TimesSheet, newEntry]
        createEntry(newTimesSheet, currentDateString)
        getData()
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
                    <ButtonForm
                        classType='success'
                        type='submit'
                        clickHandler={submitHandler}
                        disabled={false}
                    >
                        <TextItem classes={['color-white']} text='Запустить таймер' />
                    </ButtonForm>
                    <ButtonForm
                        clickHandler={closeFormHandler}
                        disabled={false}
                    >
                        <TextItem text='Отмена' />
                    </ButtonForm>
                </form>
            </div>
        </div>
    )
}

export default AddTaskForm