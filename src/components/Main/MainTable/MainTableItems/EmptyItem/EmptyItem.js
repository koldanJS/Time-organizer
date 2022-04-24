import React from 'react'
import TextItem from '../../../../TextItem/TexItem'
import Loader from '../../../../Loader/Loader'
import './EmptyItem.css'

const EmptyItem = ({isLoading = false}) => {

    const getContent = () => {
        if (isLoading) return (
            <>
                <Loader />
                <p className='loading'>LOADING...</p>
            </>
        )
        return <TextItem classes={['size-22']} text='Добавляйте новые задачи и они появятся здесь!' />
    }

    return (
        <div className='empty-item'>
            {getContent()}
        </div>
    )
}

export default EmptyItem