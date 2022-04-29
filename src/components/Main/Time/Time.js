import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSimpledStore } from '../../../functions/functions'
import Tabs from './Tabs/Tabs'
import NewEntry from './NewEntry/NewEntry'
import MainTable from './MainTable/MainTable'

const Time = () => {

    const { isAuth } = useSimpledStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth){
           return navigate("/auth");
        }
     });

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