import React from 'react'
import MainTableHeader from './MainTableHeader/MainTableHeader'
import MainTableDays from './MainTableDays/MainTableDays'
import MainTableItems from './MainTableItems/MainTableItems'
import TableTotal from './TableTotal/TableTotal'
import './MainTable.css'
import AddTaskForm from '../../../UI/AddTaskForm/AddTaskForm'
import { useSimpledStore } from '../../../../functions/functions'
import { offAddForm, offEditForm } from '../../../../redux/actions/appStateActions/appStateActions'
import EditTaskForm from '../../../UI/EditTaskForm/EditTaskForm'
import TableWeek from './TableWeek/TableWeek'

const MainTable = ({ content }) => {

    const { isAddFormOn, isEditFormOn, dispatch } = useSimpledStore()

    const closeAddFormHandler = () => {
        dispatch(offAddForm())
    }
    const closeEditFormHandler = () => {
        dispatch(offEditForm())
    }

    return (
        <div className='main-table'>
            <MainTableHeader content={ content } />
            {
                content === 'day'
                    ? <>
                        <MainTableDays />
                        <hr className='demiliter' />
                        <MainTableItems />
                    </>
                    : <TableWeek />
            }
            <TableTotal content={ content } />
            {
                isAddFormOn
                    ? <AddTaskForm closeFormHandler={closeAddFormHandler} />
                    : null
            }
            {
                isEditFormOn
                    ? <EditTaskForm closeFormHandler={closeEditFormHandler} index={isEditFormOn.index} />
                    : null
            }
        </div>
    )
}

export default MainTable