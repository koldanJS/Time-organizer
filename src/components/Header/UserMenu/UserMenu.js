import React from 'react'
import { useSimpledStore } from '../../../functions/functions'
import { useSelector } from 'react-redux'
import TextItem from '../../TextItem/TexItem'
import './UserMenu.css'

const UserMenu = ({abbr = 'UN', name = 'Username', img }) => {



    return (
        <>
            <div className='circle'>
                <TextItem classes={['size-20', 'width-900', 'color-white']} text={abbr} />
            </div>
            <div className='user-name'>
                <TextItem classes={['size-20']} text={name} />
            </div>
            <div className='user-settings'>
                <img src={img} alt="Arrow"/>
            </div>
        </>
    )
}

export default UserMenu