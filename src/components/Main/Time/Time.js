import React from 'react'
import Tabs from './Tabs/Tabs'
import NewEntry from './NewEntry/NewEntry'
import MainTable from './MainTable/MainTable'
import Archive from './Archive/Archive'

const Time = ({activeTab}) => {

    const getContent = () => {
        switch (activeTab) {
            case 'day': return (
                <>
                    <NewEntry />
                    <MainTable />
                </>
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