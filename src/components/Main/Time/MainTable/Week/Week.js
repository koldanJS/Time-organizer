import React from 'react'
import { useLocation } from 'react-router-dom'
import { getSelectedWeek, useSimpledStore } from '../../../../../functions/functions'
import './Week.css'

const Week = () => {

    const { user, offset, isLoading } = useSimpledStore()
    const location = useLocation()
    console.log('location', location)
    

    const getEntry = () => {
        if (!location.pathname.replace('/time/week', '')) return null
        const path = location.pathname.replace('/time/week/', '')
        const archive = user.archive[path]
        console.log('archive', archive)
        const selectedWeek = getSelectedWeek(offset)
        return archive.map((entry, index) => {
            return (
                <li className='week-table-item' key={ index } >
                    <ul className='days'>
                        <li className='name'>{ entry.projectName +  entry.taskName }</li>
                        {
                            selectedWeek.map((timeString, index) => {
                                if (timeString === null) return
                                return <li key={ timeString }>{ entry[selectedWeek[index]] || 0 }</li>
                            })
                        }
                    </ul>
                    <hr className='demiliter' />
                </li>
            )
        })
    }

    return (
        isLoading
            ? null
            : <div className='week-table'>
                <h1 className='text size-30 width-700 header' >Недельный отчет</h1>
                <h2 className='text head-item' >Временной промежуток</h2>
                <ul className='days'>
                    <li className='name'></li>
                    <li>Пн</li>
                    <li>Вт</li>
                    <li>Ср</li>
                    <li>Чт</li>
                    <li>Пт</li>
                    <li>Сб</li>
                    <li>Вс</li>
                </ul>
                <ul>    {/* Компонент записи */}
                    { getEntry() }
                </ul>
            </div>
    )
}

export default Week