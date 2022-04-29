import React, { useState } from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { auth } from '../../firebase-config'
import images from '../img/img'
import './Auth.css'
import ButtonForm from '../UI/ButtonForm/ButtonForm'
import AuthForm from '../UI/AuthForm/AuthForm'
import { useSimpledStore, useUpdate, newUser } from '../../functions/functions'
import { setAutorized } from '../../redux/actions/appStateActions/appStateActions'
import axiosHandler from '../../axios/axiosHandler'

const Auth = () => {

    const { dispatch } = useSimpledStore()
    const { getData } = useUpdate()

    const [isRegistered, setIsRegistered] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log('render auth')

    const [user, setUser] = useState(null)

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser !== user) setUser(currentUser)
    })

    const logout = async () => {
        console.log('auth.currentUser', auth.currentUser)
        await signOut(auth)
        localStorage.clear()
        console.log('auth.currentUser', auth.currentUser)
    }

    const register = async (event, email, password) => {
        event.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            setEmail('')
            setPassword('')
            console.log('user ', user)
            localStorage.setItem('userId', user.user.uid)
            dispatch(setAutorized(true, logout, user.user.uid))
            console.log('createUser')
            await axiosHandler.put(`/users/${user.user.uid}.json`, newUser)   //При регистрации создавать сначала нового пустого (с нач проектами) пользователя
            getData()
        } catch(e) {
            console.log('register error ', e)
        }
    }

    const login = async (event, email, password) => {
        event.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            setEmail('')
            setPassword('')
            console.log('user ', user)
            localStorage.setItem('userId', user.user.uid)
            localStorage.setItem('logout', logout)
            dispatch(setAutorized(true, logout, user.user.uid))
            console.log('setAutorized ', logout, user.user.uid)
            await getData(user.user.uid)
        } catch(e) {
            console.log('login error ', e)
        }
    }

    const clickToRegister = async () => {
        setIsRegistered(false)
    }

    return (
        <div className='auth' >
            <img src={ images.authLogo } alt='Auth-logo' className='auth-logo' />
            <div className='auth-items' >
                <h1 className='auth-text text size-30 width-700' >Войдите в Time Organizer</h1>
                {
                     isRegistered
                        ? <div className='register' >
                            <p className='text' >Впервые здесь?</p>
                            <a className='text' onClick={ clickToRegister } >зарегистрируйтесь</a>
                        </div>
                        : null
                }
                <AuthForm
                    label={ isRegistered ? 'Войдите с логином и паролем' : 'Зарегистрируйтесь с логином и паролем' }
                    buttonText={ isRegistered ? 'Войти' : 'Зарегистрироваться' }
                    placeholders={{ email: 'Email...', password: 'Пароль...' }}
                    setEmail={ setEmail }
                    setPassword={ setPassword }
                    email={ email }
                    password={ password }
                    submitHandler={ isRegistered ? login : register }
                />
                {/* <h4>User Logged In</h4>
                { user?.email }
                <ButtonForm
                    clickHandler={ logout }
                    classType='success sign'
                >
                    <p className='text color-white' >Выйти</p>
                </ButtonForm> */}
            </div>
        </div>
    )
}

export default Auth