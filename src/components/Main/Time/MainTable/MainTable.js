import React, { useState } from 'react'
import MainTableHeader from './MainTableHeader/MainTableHeader'
import MainTableDays from './MainTableDays/MainTableDays'
import MainTableItems from './MainTableItems/MainTableItems'
import TableTotal from './TableTotal/TableTotal'
import './MainTable.css'
import AddTaskForm from '../../../UI/AddTaskForm/AddTaskForm'
import { getDateString, stopTracking, useSimpledStore, useUpdate } from '../../../../functions/functions'
import { offAddForm, offEditForm } from '../../../../redux/actions/appStateActions/appStateActions'
import axiosHandler from '../../../../axios/axiosHandler'
import EditTaskForm from '../../../UI/EditTaskForm/EditTaskForm'

const MainTable = () => {

    const [timeUpdate, setTimeUpdate] = useState(0)
    const { user, userId, isAddFormOn, isEditFormOn, dispatch } = useSimpledStore()
    const { getUpdate } = useUpdate()

    setInterval(() => { //Каждые 10 сек обновлять таблицу времени новыми данными (без асинхронных запросов)
        if (user.activeEntry) { //Если есть активная запись
            if (user?.activeEntry?.timesSheetId !== getDateString()) {  //Если начался новый день
                stopTracking( user, userId, getDateString, axiosHandler, getUpdate )    //Выключить активную запись
            }
            setTimeUpdate(Math.round(new Date().getSeconds()/10))   //Если есть активная запись, обновить таблицу
        }
      }, 10000);
      console.log('render mainTable', new Date())

    const closeAddFormHandler = () => {
        console.log('closeAddTask')
        dispatch(offAddForm())
    }
    const closeEditFormHandler = () => {
        console.log('closeEditTask')
        dispatch(offEditForm())
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