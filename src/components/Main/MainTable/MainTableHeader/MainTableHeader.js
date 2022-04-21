import React from 'react'
import TableHeaderLeft from './TableHeaderLeft/TableHeaderLeft'
import TableHeaderRight from './TableHeaderRight/TableHeaderRight'
import './MainTableHeader.css'

const MainTableHeader = () => { //Нужна передача состояния

    const props = {
        goalDay: 'Сегодня:',
        data: 'понедельник, 18 апр.'
    }

    return (
        <div className='main-table-header' >
            <TableHeaderLeft {...props} />
            <TableHeaderRight />
        </div>
    )
}

export default MainTableHeader