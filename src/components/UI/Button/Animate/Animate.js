import React from 'react'
import TextItem from '../../../TextItem/TexItem'
import images from '../../../img/img'
import './Animate.css'

const Animate = ({title}) => {

    const getContent = () => {
        return (
            <>
                <img src={images.strike} alt='Timer' className='strike hour' />
                <img src={images.strike} className='strike minute' />
                <img src={images.clock} />
            </>
        )
    }

    return (
        <>
            <div className='animate' >
                { getContent() }
                
            </div>
            <TextItem classes={['color-white']} text={title} />
        </>
    )
}

export default Animate