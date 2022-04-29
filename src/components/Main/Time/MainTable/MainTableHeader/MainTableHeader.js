import React from 'react'
import TableHeaderLeft from './TableHeaderLeft/TableHeaderLeft'
import TableHeaderRight from './TableHeaderRight/TableHeaderRight'
import './MainTableHeader.css'

const MainTableHeader = () => { //Нужна передача состояния



    return (
        <div className='main-table-header' >
            <TableHeaderLeft />
            <TableHeaderRight />
        </div>
    )
}

export default MainTableHeader