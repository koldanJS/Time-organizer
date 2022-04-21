import React from 'react'
import TableItemLeft from './TableItemLeft/TableItemLeft'
import TableItemRight from './TableItemRight/TableItemRight'
import './TableItem.css'

const TableItem = ({item}) => {

    const classList = ['table-item']
    classList.push(item.classActive)

    return (
        <div className={classList.join(' ')}>
            <TableItemLeft {...item.left} />
            <TableItemRight {...item.right} classActive={item.classActive} />
        </div>
    )
}

export default TableItem