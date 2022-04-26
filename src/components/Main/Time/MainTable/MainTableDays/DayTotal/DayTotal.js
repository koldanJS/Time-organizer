import React from 'react'
import TextItem from '../../../../../TextItem/TexItem'
import './DayTotal.css'

const DayTotal = ({totalTime}) => {



    return (
        <div className='day-total' >
            <TextItem classes={['width-700']} text='Итого за неделю' />
            <TextItem classes={['inline-text']} text={totalTime} />
        </div>
    )
}

export default DayTotal