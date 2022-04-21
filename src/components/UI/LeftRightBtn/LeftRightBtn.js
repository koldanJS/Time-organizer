import React from 'react'
import BtnLeft from './BtnLeft/BtnLeft'
import BtnRight from './BtnRight/BtnRight'
import './LeftRightBtn.css'

const LeftRightBtn = ({classType}) => {

    const classList = ['left-right-btn']
    classList.push(classType)

    const props = {
        'arrow': {
            left: {
                content: {
                    title: '', img: {name: 'arrowLeft', alt: 'Arrow'}
                },
                classes: ['arrow']
            },
            right: {
                content: {
                    title: '', img: {name: 'arrowRight', alt: 'Arrow'}
                },
                classes: ['arrow']
            }
        },
        'day-week': {
            left: {
                content: {
                    title: 'День', img: ''
                },
                classes: ['day', 'active']
            },
            right: {
                content: {
                    title: 'Неделя', img: ''
                },
                classes: ['week']
            }
        }
    }

    return (
        <div className={classList.join(' ')} >
            <BtnLeft {...props[classType].left} />
            <BtnRight {...props[classType].right} />
        </div>
    )
}

export default LeftRightBtn