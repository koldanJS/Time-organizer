import React from 'react'
import TextItem from '../../../../../TextItem/TexItem'
import './TableItemLeft.css'

const TableItemLeft = ({keyName, projectName, taskName, executor}) => {

    const getKey = () => {
        if (keyName) return <TextItem classes={['width-700']} text={`[${keyName}]`} />
        return null
    }

    return (
        <div className='table-item-left'>
            <div className='head' >
                { getKey() }
                <TextItem classes={['width-700']} text={projectName} />
                <TextItem text={`(${executor})`} />
            </div>
            <TextItem text={taskName} />
        </div>
    )
}

export default TableItemLeft