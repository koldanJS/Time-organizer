import React from 'react'
import TextItem from '../../../TextItem/TexItem'
import images from '../../../img/img'
import './BtnLeft.css'

const BtnLeft = ({classes, content, clickHandler}) => {

    let classList = ['btn-left']
    classList = [...classList, ...classes]

    const getContent = () => {
        if (content.title) return <TextItem text={content.title} />
        return <img src={images[content.img.name]} alt={content.img.alt} />
    }

    return (
        <a onClick={() => clickHandler(-1)} className={classList.join(' ')} >
            { getContent() }
        </a>
    )
}

export default BtnLeft