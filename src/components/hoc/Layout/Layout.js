import React, { useState } from 'react'
import Header from '../../Header/Header'
// import './Layout.css'

const Layout = props => {

    // const [menu, setMenu] = useState(false)
    // const toggleMenuHandler = () => {
    //     setMenu(!menu)
    // }
    // const menuCloseHandler = () => {
    //     setMenu(false)
    // }

    return (
        <div className='Layout' >
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )
}


export default Layout