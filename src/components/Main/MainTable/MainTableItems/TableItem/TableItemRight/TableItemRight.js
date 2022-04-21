import React from 'react'
import TextItem from '../../../../../TextItem/TexItem'
import Button from '../../../../../UI/Button/Button'
import './TableItemRight.css'

const TableItemRight = ({time, classActive}) => {

    const contents = {
        btn1: {
            title: !!classActive ? 'Стоп' : 'Старт',
            img: {name: 'timerLogo', alt: 'Timer'},
            isAnimate: !!classActive
        },
        btn2: {
            title: 'Изменить',
            img: '',
            isAnimate: false
        }
    }

    return (
        <div className='table-item-right'>
            <TextItem classes={['size-20', 'width-700']} text={time} />
            <Button classType='start' content={contents.btn1} />
            <Button classType='edit' content={contents.btn2} />
        </div>
    )
}

export default TableItemRight