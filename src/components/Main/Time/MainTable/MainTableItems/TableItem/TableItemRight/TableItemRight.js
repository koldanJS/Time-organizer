import React from 'react'
import TextItem from '../../../../../../TextItem/TexItem'
import Button from '../../../../../../UI/Button/Button'
import { getFormatTime } from '../../../../../../../functions/functions'
import './TableItemRight.css'

const TableItemRight = ({totalTime, isActive}) => {

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

    return (
        <div className='table-item-right'>
            <TextItem classes={['size-20', 'width-700']} text={getFormatTime(totalTime)} />
            <Button classType='start' content={contents.btn1} />
            <Button classType='edit' content={contents.btn2} />
        </div>
    )
}

export default TableItemRight