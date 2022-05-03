import React from 'react'
import TextItem from '../../../../../../TextItem/TexItem'
import Button from '../../../../../../UI/Button/Button'
import { changeActiveEntry, getDateString, getFormatTime, stopTracking, useSimpledStore, useUpdate } from '../../../../../../../functions/functions'
import axiosHandler from '../../../../../../../axios/axiosHandler'
import './TableItemRight.css'
import Animate from '../../../../../../UI/Button/Animate/Animate'
import images from '../../../../../../img/img'
import { onEditForm } from '../../../../../../../redux/actions/appStateActions/appStateActions'

const TableItemRight = ({totalTime, isActive, index}) => {

    const { user, userId, offset, dispatch } = useSimpledStore()
    const { getUpdate } = useUpdate()

    const stop = () => {
        stopTracking( user, userId, axiosHandler, getUpdate )
        console.log('STOP')
    }

    const start = async () => {
        if (offset) return
        if (user.activeEntry) await stopTracking( user, userId, axiosHandler, getUpdate )    //Записывает в totalTime окончательное время
        await changeActiveEntry( offset, user, userId, getDateString, axiosHandler, getUpdate, index )  //Устанавливает данную запись активной, если offset === 0
        console.log('START')
    }

    const edit = async (index) => {
        if (!offset && user.activeEntry && index === user.activeEntry.entryNumber) {    //Проверка, что редактируем активную запись
            await stopTracking( user, userId, axiosHandler, getUpdate )  //Тогда остановить ее и обновить в ней данные
        }
        dispatch(onEditForm(index))
        console.log('EDIT ', index)
    }

    return (
        <div className='table-item-right'>
            <TextItem classes={['size-20', 'width-700']} text={getFormatTime(totalTime)} />
            {
                isActive
                    ? <Button
                        clickHandler={stop}
                        classType='start'
                    >
                        <Animate title='Стоп' />
                    </Button>
                    : <Button
                        clickHandler={start}
                        classType='start'
                    >
                        <img src={images.timerLogo} alt='Timer' />
                        <TextItem text='Старт' />
                    </Button>
            }
            <Button
                clickHandler={() => edit(index)}
                classType='edit'
                >
                <TextItem text='Изменить' />
            </Button>
        </div>
    )
}

export default TableItemRight