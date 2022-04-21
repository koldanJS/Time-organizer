import React from 'react'
import TextItem from '../../TextItem/TexItem'
import Animate from './Animate/Animate'
import images from '../../img/img'
import './Button.css'

const Button = ({classType, content}) => {

    const classList = ['btn']
    if (classType) classList.push(classType)

    const getContent = () => {
        if (content.isAnimate) return <Animate title={content.title} />
        if (content.img && content.title) return (
            <>
                <img src={images[content.img.name]} alt={content.img.alt} />
                <TextItem text={content.title} />
            </>
        )
        if (content.img) return <img src={images[content.img.name]} alt={content.img.alt} />
        return <TextItem text={content.title} />
    }

    return (
        <button className={classList.join(' ')} >
            { getContent() }
        </button>
    )
}

export default Button