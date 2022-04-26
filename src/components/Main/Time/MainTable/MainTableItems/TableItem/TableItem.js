import React from 'react'
import TableItemLeft from './TableItemLeft/TableItemLeft'
import TableItemRight from './TableItemRight/TableItemRight'
import './TableItem.css'

const TableItem = ({projectName, taskName, description, totalTime, isActive}) => {

    const classList = ['table-item']
    if (isActive) classList.push('active')


    const left = {
        projectName,
        taskName
    }
    const right = {
        totalTime,
        isActive
    }

    return (
        <div className={classList.join(' ')}>
            <TableItemLeft {...left} />
            <TableItemRight {...right} />
        </div>
    )
}

export default TableItem