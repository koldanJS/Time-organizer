import React from 'react'
import TextItem from '../../../../../../TextItem/TexItem'
import Button from '../../../../../../UI/Button/Button'
import { getDateString, getFormatTime, stopTracking, useSimpledStore, useUpdate } from '../../../../../../../functions/functions'
import axiosHandler from '../../../../../../../axios/axiosHandler'
import './TableItemRight.css'

const TableItemRight = ({totalTime, isActive}) => {

    const { user, userId } = useSimpledStore()
    const { getUpdate } = useUpdate()

    const contents = {
        btn1: {
            title: isActive ? 'Стоп' : 'Старт',
            img: {name: 'timerLogo', alt: 'Timer'},
            isAnimate: isActive
        },
        btn2: {
            title: 'Изменить',
            img: '',
            isAnimate: false
        }
    }

    const stop = () => {
        stopTracking( user, userId, getDateString, axiosHandler, getUpdate )
        console.log('STOP')
    }

    return (
        <div className='table-item-right'>
            <TextItem classes={['size-20', 'width-700']} text={getFormatTime(totalTime)} />
            <Button classType='start' content={contents.btn1} clickHandler={stop} />
            <Button classType='edit' content={contents.btn2} />
        </div>
    )
}

export default TableItemRight