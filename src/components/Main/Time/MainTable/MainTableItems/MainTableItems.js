import React from 'react'
import TableItem from './TableItem/TableItem'
import './MainTableItems.css'
import EmptyItem from './EmptyItem/EmptyItem'
import { msPerMin, useSimpledStore } from '../../../../../functions/functions'

const MainTableItems = () => {

    const { user, projects, tasks, isLoading, selectedDate, offset } = useSimpledStore()
    const keySelectedDate = selectedDate.dateString

    const getCurrentEntry = (item, index) => {
        const projectName = projects[item.projectId]?.projectName
        const taskName = tasks[item.taskId]?.taskName
        const description = item.description
        let totalTime = item.totalTime
        const isActive = (
            !offset &&  //Что текущий день, иначе априори не активна
            user.activeEntry &&     //Что есть активные записи
            user.activeEntry.entryNumber === index  //Для записи, индекс которой соответствует активной
        )
        if (isActive) totalTime += Math.round( (Date.now() - user.activeEntry.startTime) / msPerMin )
        return { projectName, taskName, description, totalTime, isActive, index }
    }

    const getContent = () => {
        const timesSheets = user.timesSheets
        const tableItems = []
        const timesSheet = timesSheets[keySelectedDate]    //Получили массив задач в текущей таблице
        if (!timesSheet) return <EmptyItem />
        timesSheet.forEach((item, index) => {     //Наполнили TableItem объектами, схожими с timesSheet, но с именами вместо id
            tableItems.push({ ...getCurrentEntry(item, index) })
        })
        return (
            tableItems.map((item, index) => {
                return <TableItem key={index} {...item} />
            })
        )
    }

    return (
        <div className='main-table-items'>
            {
                isLoading
                    ? <EmptyItem isLoading={true} />
                    : getContent()
            }
        </div>
    )
}

export default MainTableItems