import React from 'react'
import TableItem from './TableItem/TableItem'
import './MainTableItems.css'
import EmptyItem from './EmptyItem/EmptyItem'
import { useSimpledStore } from '../../../../../functions/functions'

const MainTableItems = () => {

    const { user, projects, tasks, isLoading, selectedDate,  } = useSimpledStore()
    const keySelectedDate = selectedDate.dateString

    const getContent = () => {
        const timesSheets = user.timesSheets
        const tableItems = []
        const timesSheet = timesSheets[keySelectedDate]    //Получили массив задач в текущей таблице
        if (!timesSheet) return <EmptyItem />
        timesSheet.forEach(item => {     //Наполнили TableItem объектами, схожими с timesSheet, но с именами вместо id
            tableItems.push({
                projectName: projects[item.projectId]?.projectName,
                taskName: tasks[item.taskId]?.taskName,
                description: item.description,
                totalTime:item.totalTime,
                isActive: item.isActive
            })
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