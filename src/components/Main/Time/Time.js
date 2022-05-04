import React from 'react'
import Tabs from './Tabs/Tabs'
import NewEntry from './NewEntry/NewEntry'
import MainTable from './MainTable/MainTable'
import Archive from './Archive/Archive'
// import EmptyPage from './MainTable/EmptyPage/EmptyPage'
import Week from './MainTable/Week/Week'

const Time = ({activeTab}) => {

    const getContent = () => {
        switch (activeTab) {
            case 'day': return (
                <>
                    <NewEntry />
                    <MainTable />
                </>
            )
            case 'week': return (
                <Week />
                // <EmptyPage />
            )
            case 'archive': return (
                <Archive />
            )
            default: return (
                <>
                    <NewEntry />
                    <MainTable />
                </>
            )
        }
    }

    return (
        <>
            <div className='container'>
                <Tabs />
            </div>
            <hr className='demiliter'/>
            <div className='container'>
                { getContent() }
            </div>
        </>
    )
}

export default Time