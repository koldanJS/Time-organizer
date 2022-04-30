import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { setUser } from '../../redux/actions/appStateActions/appStateActions'
import { useSimpledStore, newUser, useUpdate } from '../../functions/functions'
import images from '../img/img'
import './Auth.css'
import AuthForm from '../UI/AuthForm/AuthForm'
import axiosHandler from '../../axios/axiosHandler'

const Auth = () => {

    const { dispatch } = useSimpledStore()
    const navigate = useNavigate()
    const [isRegistered, setIsRegistered] = useState(true)
    const { getData } = useUpdate()

    const clickToRegister = async () => {
        setIsRegistered(false)
    }

    console.log('render auth')

    const register = async (event, email, password) => {
        event.preventDefault()
        const auth = getAuth()
        try {
            const data = await createUserWithEmailAndPassword(auth, email, password)
            const user = data.user
            dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid,
            }))
            await axiosHandler.put(`/users/${user.uid}.json`, newUser)   //При регистрации создавать сначала нового пустого (с нач проектами) пользователя
            await getData(user.uid)
            navigate('/')
        } catch(e) {
            console.log('register error ', e)
        }
    }

    const login = async (event, email, password) => {
        event.preventDefault()
        const auth = getAuth()
        try {
            const data = await signInWithEmailAndPassword(auth, email, password)
            const user = data.user
            dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid,
            }))
            await getData(user.uid)
            navigate('/')
        } catch(e) {
            console.log('login error ', e)
        }
    }

    return (
        <div className='auth' >
            <img src={ images.appLogo } alt='Auth-logo' className='auth-logo' />
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
                    submitHandler={ isRegistered ? login : register }
                />
            </div>
        </div>
    )
}

export default Auth