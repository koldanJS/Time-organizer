import React, { useState } from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { auth } from '../../../firebase-config'
import './Home.css'

const Home = () => {

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    console.log('render home')

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser !== user) setUser(currentUser)
    })

    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            setRegisterEmail('')
            setRegisterPassword('')
            console.log(user)
        } catch(e) {
            console.log('register err ', e)
        }

    }

    const login = async () => {
        
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            setLoginEmail('')
            setLoginPassword('')
            console.log(user)
        } catch(e) {
            console.log('register err ', e)
        }

    }

    const logout = async () => {
        console.log('auth.currentUser', auth.currentUser)
        await signOut(auth)
        console.log('auth.currentUser', auth.currentUser)
    }

    return (
        <div className='home' >
            <h1>Home</h1>
            <div>
                <h3>Register User</h3>
                <input
                    value={registerEmail}
                    placeholder='Email...'
                    onChange={ event => { setRegisterEmail(event.target.value); console.log(event.target.value) } }
                />
                <input
                    value={registerPassword}
                    placeholder='Password...'
                    type='password'
                    onChange={ event => { setRegisterPassword(event.target.value); console.log(event.target.value) } }
                />
                <button onClick={ register } >Create User</button>
            </div>
            <div>
                <h3>Login</h3>
                <input
                    value={loginEmail}
                    placeholder='Email...'
                    onChange={ event => { setLoginEmail(event.target.value); console.log(event.target.value) } }
                />
                <input
                    value={loginPassword}
                    placeholder='Password...'
                    type='password'
                    onChange={ event => { setLoginPassword(event.target.value); console.log(event.target.value) } }
                />
                <button onClick={ login } >Login</button>
            </div>
            <h4>User Logged In</h4>
            { user?.email }
            <button onClick={ logout } >Sign Out</button>
        </div>
    )
}

export default Home