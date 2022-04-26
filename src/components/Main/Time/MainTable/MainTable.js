import React from 'react'
import MainTableHeader from './MainTableHeader/MainTableHeader'
import MainTableDays from './MainTableDays/MainTableDays'
import MainTableItems from './MainTableItems/MainTableItems'
import TableTotal from './TableTotal/TableTotal'
import './MainTable.css'
import AddTaskForm from '../../../UI/AddTaskForm/AddTaskForm'
import { useSimpledStore } from '../../../../functions/functions'
import { offAddForm } from '../../../../redux/actions/appStateActions/appStateActions'

const MainTable = () => {

    const { isAddFormOn, dispatch } = useSimpledStore()

    const closeFormHandler = () => {
        console.log('closeTask')
        dispatch(offAddForm())
    }

    return (
        <div className='main-table'>
            <MainTableHeader />
            <MainTableDays />
            <hr className='demiliter' />
            <MainTableItems />
            <TableTotal />
            {
                isAddFormOn
                    ? <AddTaskForm closeFormHandler={closeFormHandler} />
                    : null
            }
        </div>
    )
}

export default MainTable