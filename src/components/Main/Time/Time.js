import React from 'react'
import Tabs from './Tabs/Tabs'
import NewEntry from './NewEntry/NewEntry'
import MainTable from './MainTable/MainTable'

const Time = ({activeTab}) => {

    const getContent = () => {
        switch (activeTab) {
            case 'timesheets': return (
                <>
                    <NewEntry />
                    <MainTable />
                </>
            )
            case 'archive': return (
                <>

                </>
            )
            default: return null
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