import React from 'react'
import Tabs from './Tabs/Tabs'
import NewEntry from './NewEntry/NewEntry'
import MainTable from './MainTable/MainTable'

const Time = () => {

    return (
        <>
            <div className='container'>
                <Tabs />
            </div>
            <hr className='demiliter'/>
            <div className='container'>
                <NewEntry />
                <MainTable />
            </div>
        </>
    )
}

export default Time