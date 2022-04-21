import React from 'react'
import TextItem from '../../../../TextItem/TexItem'
import images from '../../../../img/img'
import './DayItem.css'

const DayItem = ({classActive, isTimeOn, day, time}) => {

    const classList = ['day-item']
    classList.push(classActive)
    if (isTimeOn) classList.push('time-on')

    const getImage = () => {
        if (isTimeOn) return <img src={images.clockLogo} alt='Clock' />
        return null
    }

    return (
        <a href='#' className={classList.join(' ')}>
            <TextItem classes={['width-700']} text={day} />
            <div className='day-time' >
                <TextItem classes={['inline-text']} text={time} />
                { getImage() }
            </div>
        </a>
    )
}

export default DayItem