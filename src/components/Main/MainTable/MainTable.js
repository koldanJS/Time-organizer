import React, { useState } from 'react'
import MainTableHeader from './MainTableHeader/MainTableHeader'
import MainTableDays from './MainTableDays/MainTableDays'
import MainTableItems from './MainTableItems/MainTableItems'
import TableTotal from './TableTotal/TableTotal'
import './MainTable.css'
import AddTaskForm from '../../UI/AddTaskForm/AddTaskForm'

const MainTable = () => {

   const [isAddFormOn, setIsAddFormOn] = useState(false)

    return (
        <div className='main-table'>
            <MainTableHeader />
            <MainTableDays />
            <hr className='demiliter' />
            <MainTableItems />
            <TableTotal />
            {/* <AddTaskForm /> */}
        </div>
    )
}

export default MainTable