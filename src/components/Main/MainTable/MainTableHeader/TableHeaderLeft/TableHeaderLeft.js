import React from 'react'
import TextItem from '../../../../TextItem/TexItem'
import LeftRightBtn from '../../../../UI/LeftRightBtn/LeftRightBtn'
import './TableHeaderLeft.css'

const TableHeaderLeft = ({goalDay, data}) => {

    

    return (
        <div className='table-header-left' >
            <LeftRightBtn classType='arrow' />
            <TextItem classes={['size-22', 'width-700']} text={goalDay} />
            <TextItem classes={['size-22']} text={data} />
        </div>
    )
}

export default TableHeaderLeft