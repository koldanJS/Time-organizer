import React from 'react'
import TableItem from './TableItem/TableItem'
import './MainTableItems.css'

const MainTableItems = () => {

    const tableItems = [
        {
            classActive: '',
            left: {
                keyName: 'key',
                projectName: 'Название проекта',
                taskName: 'Название задачи',
                executor: 'исполнитель'
            },
            right: {
                time: '2:14'
            }
        },
        {
            classActive: 'active',
            left: {
                keyName: 'key',
                projectName: 'Название проекта',
                taskName: 'Название задачи',
                executor: 'исполнитель'
            },
            right: {
                time: '1:11'
            }
        },
        {
            classActive: '',
            left: {
                keyName: 'key',
                projectName: 'Название проекта',
                taskName: 'Название задачи',
                executor: 'исполнитель'
            },
            right: {
                time: '2:05'
            }
        },
        {
            classActive: '',
            left: {
                keyName: 'key',
                projectName: 'Название проекта',
                taskName: 'Название задачи',
                executor: 'исполнитель'
            },
            right: {
                time: '3:00'
            }
        },
    ]

    return (
        <div className='main-table-items'>
            {
                tableItems.map((item, index) => {
                    return <TableItem key={index} item={item} />
                })
            }
        </div>
    )
}

export default MainTableItems