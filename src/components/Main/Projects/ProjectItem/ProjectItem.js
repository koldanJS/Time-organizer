import React, { useState } from 'react'
import { v4 } from 'uuid'
import axiosHandler from '../../../../axios/axiosHandler'
import { useSimpledStore, useUpdate } from '../../../../functions/functions'
import images from '../../../img/img'
import './ProjectItem.css'

const ProjectItem = ({ id }) => {

    const { getUpdate } = useUpdate()
    const { userId, user, projects, tasks } = useSimpledStore()
    const [isEdit, setIsEdit] = useState(false)
    const [isAddTask, setIsAddTask] = useState(false)
    const [projectName, setProjectName] = useState(projects[id].projectName)
    const [description, setDescription] = useState(projects[id].description)
    const [taskName, setTaskName] = useState('')
    const [updatedTasks, setUpdatedTasks] = useState(tasks)
    const [updatedTasksId, setUpdatedTasksId] = useState(projects[id].tasksId)

    const getTasks = () => {
        return (
            updatedTasksId.map( id => {
                return (
                    <li className='task-item' key={id}>
                        <p className={ isEdit ? 'text' : 'text mar-r' } > { updatedTasks[id].taskName } </p>
                        {
                            isEdit
                                ? <button onClick={ () => deleteTask(id) } >
                                    <img
                                        src={images.xLogo}
                                        alt='X'
                                    />
                                </button>
                                : null
                        }
                    </li>
                )
            } )
        )
    }

    const addTask = event => {
        if (event.code !== 'Enter') return //Срабатывает только на Enter
        if (!taskName) alert('Имя задачи не должно быть пустым!')   //Если имя не введено и нажат Enter
        const newId = v4()  //Получаем шифрованный id
        setUpdatedTasksId([...updatedTasksId, newId])   //Добавляем в состояние
        const newTask = { [newId]: { createdBy: userId, projectId: id, taskName } }
        const newTasks = { ...updatedTasks, ...newTask }    //Сформированную задачу добавляем к остальным
        setUpdatedTasks(newTasks)   //Обновляем состояние
        setIsAddTask(false) //И отключаем редактор
        setTaskName('') //Далее очищаем сопутствующие поля
    }

    const deleteTask = idForDelete => {
        setUpdatedTasksId(updatedTasksId.filter(id => id !== idForDelete))  //Отфильтровать из массива id удаляемой задачи, обновить состояние
        const newTasks = {}
        updatedTasksId.forEach(id => { newTasks[id] = updatedTasks[id] })   //Теперь добавить в новый объект только задачи с id из отфильтрованного массива
        setUpdatedTasks(newTasks)   //Обновить состояние
    }

    const addTaskInput = () => {
        const closeTaskInput = () => {
            setIsAddTask(false)
            setTaskName('')
        }
        return (
            <>
                <input
                    className='add-task text'
                    value={ taskName }
                    placeholder='Название задачи...'
                    onChange={ (e) => setTaskName(e.target.value) }
                    onKeyDown={ addTask }
                />
                <button onClick={ closeTaskInput } >
                    <img
                        src={images.xLogo}
                        alt='X'
                    />
                </button>
            </>
        )
    }

    const closeEdit = () => {
        setIsAddTask(false)
        setProjectName(projects[id].projectName)
        setDescription(projects[id].description)
        setTaskName('')
        setUpdatedTasks(tasks)
        setUpdatedTasksId(projects[id].tasksId)
        setIsEdit(false)
    }

    const saveChanges = async () => {
        if (projectName) {
            const tasksArr = []
            const tasksUrls = updatedTasksId.map(id => {
                tasksArr.push(updatedTasks[id])
                return `/tasks/${id}.json`
            })
            const promises = tasksUrls.map((url, index) => axiosHandler.put(url, tasksArr[index]))

            const newProject = {
                createdBy: userId,
                createdTime: Date.now(),
                description,
                projectName,
                tasksId: updatedTasksId
            }

            let userTasksId = [...user.tasksId]    //Получили весь старый массив id задач для редактирования у user
            const projectTasksId = [...projects[id].tasksId]    //Получили весь старый массив id задач для сверки у project
            userTasksId = userTasksId.filter(id =>  !projectTasksId.includes(id))  //Вычли из масива user старые задачи, входящие в project
            userTasksId = [...userTasksId, ...updatedTasksId]   //Положили в массив user новые id задач из project

            const deletedId = projectTasksId.filter(id => !updatedTasksId.includes(id))   //Нашли все id удаленных задач
            const deletedUrls = deletedId.map(id => `/tasks/${id}.json` )   //Сформировали по ним массив ссылок
            const deletedPromises = deletedUrls.map(url => axiosHandler.delete(url))    //А далее массив промисов

            try {
                await Promise.all(promises) //Добавили разом все задачи из обновленного массива задач
                await Promise.all(deletedPromises)  //Удалили разом все задачи, что были удалены в проекте
                await axiosHandler.put(`/projects/${id}.json`, newProject)  //Добавили в БД отредактированный проект
                await axiosHandler.put(`/users/${userId}/tasksId.json`, userTasksId)    //Заменили список задач у user
                await getUpdate()   //Обновили данные состояния приложения
            } catch(e) {
                console.log('saveChanges(put tasks or changed project)', e)
            }
            setIsAddTask(false)
            setProjectName(projects[id].projectName)
            setDescription(projects[id].description)
            setTaskName('')
            setIsEdit(false)
        }
        alert('Имя проекта не должно быть пустым!')
    }

    return (
        <li className='project-item' >
            <ul>
                <li className='text editor' >
                    {
                        isEdit
                            ? <>
                                <button
                                    onClick={ saveChanges }
                                    className='save'
                                >
                                    <img
                                        src={images.saveLogo}
                                        alt='Save'
                                    />
                                </button>
                                <button
                                    onClick={ closeEdit }
                                    className='cancel'
                                >
                                    <img
                                        className='cancel'
                                        src={images.xLogo}
                                        alt='Cancel'
                                    />
                                </button>
                                <button
                                    onClick={ () => setIsEdit(!isEdit) }
                                    className='trash'    
                                >
                                    <img
                                        src={images.trashLogo}
                                        alt='Trash'
                                    />
                                </button>
                            </>
                            : <button onClick={ () => setIsEdit(!isEdit) } >
                                <img
                                    src={images.editLogo}
                                    alt='Edit'
                                />
                            </button>
                    }
                </li>
                <li>
                    {
                        isEdit
                            ? <textarea
                                className='edit-project text'
                                value={ projectName }
                                placeholder='Название проекта...'
                                onChange={ (e) => setProjectName(e.target.value) }
                            />
                            : <p className='text' > { projects[id].projectName } </p>
                    }
                </li>
                <li className='text description' >
                    {
                        isEdit
                            ? <textarea
                                className='edit-project text'
                                value={ description }
                                placeholder='Описание проекта...'
                                onChange={ (e) => setDescription(e.target.value) }
                            />
                            : <p className='text' > { projects[id].description } </p>
                    }
                </li>
                <li className='tasks' >
                    <ul className='tasks-list'>
                        { getTasks() }
                        {
                            isEdit
                                ? <li className='task-item' >
                                    {
                                        isAddTask
                                            ? addTaskInput()
                                            : <button
                                                onClick={ (e) => setIsAddTask(!isAddTask) }
                                            >
                                                <img
                                                    src={images.plusLogo}
                                                    alt='Add'
                                                />
                                            </button>
                                    }
                                </li>
                                : null
                        }
                    </ul>
                </li>
            </ul>
        </li>
    )
}

export default ProjectItem