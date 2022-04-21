import React from 'react'
import TextItem from '../../../TextItem/TexItem'
import Button from '../../../UI/Button/Button'
import './TableTotal.css'

const TableTotal = ({time}) => {

    const content = {title: 'Отправить недельный отчет', img: '', isAnimate: false}

    return (
        <div className='table-total'>
            <div className='total' >
                <TextItem classes={['size-20', 'width-700']} text='Итого:' />
                <TextItem classes={['size-20', 'width-700']} text={time} />
            </div>
            <div className='submit-week' >
                <Button content={content} />
            </div>
        </div>
    )
}

export default TableTotal