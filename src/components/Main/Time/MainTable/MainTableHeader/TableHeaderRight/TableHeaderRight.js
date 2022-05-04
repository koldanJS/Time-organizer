import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDateString, msPerDay, useSimpledStore } from '../../../../../../functions/functions'
import { setOffset } from '../../../../../../redux/actions/appStateActions/timeStateActions'
import LeftRightBtn from '../../../../../UI/LeftRightBtn/LeftRightBtn'
import './TableHeaderRight.css'

const TableHeaderRight = () => {

    const { dispatch } = useSimpledStore()
    const [activeBtn, setActiveBtn] = useState('day')
    const navigate = useNavigate()

    const changeHandler = (event) => {
        const now = new Date(getDateString()) //милисекунды на сегодня в 00:00
        const selectedDate = new Date(event.target.value) //милисекунды на выбранный день в 00:00
        const newOffset = Math.round((selectedDate - now)/msPerDay) //Смещение в днях
        dispatch(setOffset(newOffset))
    }

    const clickHandler = (direction) => {
        if (direction > 0) {
            setActiveBtn('week')
            navigate('/time/week')
            console.log('week')
        } else {
            setActiveBtn('day')
            navigate('/time/day')
            console.log('day')
        }
    }

    const classListLeft = 'text btn-left day' + (activeBtn === 'day' ? ' active' : '')
    const classListRight = 'text btn-right week' + (activeBtn === 'week' ? ' active' : '')

    return (
        <div className='table-header-right' >
            <input type='date' onChange={ changeHandler } />
            <div className='left-right-btn day-week' >
                <LeftRightBtn
                    classList={ classListLeft }
                    clickHandler={ () => clickHandler(-1) }
                >
                    День
                </LeftRightBtn>
                <LeftRightBtn
                    classList={ classListRight }
                    clickHandler={ () => clickHandler(1) }
                >
                    Неделя
                </LeftRightBtn>
            </div>
        </div>
    )
}

export default TableHeaderRight