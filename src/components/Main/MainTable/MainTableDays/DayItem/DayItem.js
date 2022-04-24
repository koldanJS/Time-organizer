import React from 'react'
import TextItem from '../../../../TextItem/TexItem'
import images from '../../../../img/img'
import { getFormatTime } from '../../../../../functions/functions'
import './DayItem.css'

const DayItem = ({isActive, isTimeOn, day, totalTime, clickHandler}) => {

    const classList = ['day-item']
    if (isActive) classList.push('active')
    if (isTimeOn) classList.push('time-on')

    const getImage = () => {
        if (isTimeOn) return <img src={images.clockLogo} alt='Clock' />
        return null
    }

    return (
        <a href='#' onClick={clickHandler} className={classList.join(' ')}>
            <TextItem classes={['width-700']} text={day} />
            <div className='day-time' >
                <TextItem classes={['inline-text']} text={getFormatTime(totalTime)} />
                { getImage() }
            </div>
        </a>
    )
}

export default DayItem