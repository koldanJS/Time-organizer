import React from 'react'
import MainTableHeader from './MainTableHeader/MainTableHeader'
import MainTableDays from './MainTableDays/MainTableDays'
import MainTableItems from './MainTableItems/MainTableItems'
import TableTotal from './TableTotal/TableTotal'
import './MainTable.css'

const MainTable = () => {

   

    return (
        <div className='main-table'>
            <MainTableHeader />
            <MainTableDays />
            <hr className='demiliter' />
            <MainTableItems />
            <TableTotal time='8:30' />
        </div>
    )
}

export default MainTable