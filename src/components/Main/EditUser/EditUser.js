import React, { useState } from 'react'
import axiosHandler from '../../../axios/axiosHandler'
import { useSimpledStore, useUpdate } from '../../../functions/functions'
import Loader from '../../Loader/Loader'
import ButtonForm from '../../UI/ButtonForm/ButtonForm'
import './EditUser.css'
import EditUserItem from './EditUserItem/EditUserItem'

const EditUser = () => {

    const { userId, user, isLoading } = useSimpledStore()
    const { getData } = useUpdate()
    const [firstName, setFirstName] = useState(user?.info?.firstName || '')
    const [lastName, setLastName] = useState(user?.info?.lastName || '')
    const [email, setEmail] = useState(user?.info?.email || '')
    const [company, setCompany] = useState(user?.info?.company || '')
    const [dateOfBirth, setDateOfBirth] = useState(user?.info?.dateOfBirth || '')
    const [phoneNumber, setPhoneNumber] = useState(user?.info?.phoneNumber || '')
    const [isChange, setIsChange] = useState(false)

    const mainItems = [
        {
            name: 'Имя',
            value: firstName,
            placeholder: 'Ваше имя...',
            setValue: setFirstName
        },
        {
            name: 'Фамилия',
            value: lastName,
            placeholder: 'Ваша фамилия...',
            setValue: setLastName
        },
        {
            name: 'Рабочая почта',
            value: email,
            placeholder: 'Ваш email...',
            setValue: setEmail,
            type: 'email'
        },
        {
            name: 'Компания',
            value: company,
            placeholder: 'Ваше место работы...',
            setValue: setCompany
        }
    ]
    const additionalItems = [
        {
            name: 'День рождения',
            value: dateOfBirth,
            placeholder: 'Ваш день рождения...',
            setValue: setDateOfBirth,
            type: 'date'
        },
        {
            name: 'Номер телефона',
            value: phoneNumber,
            placeholder: 'Ваш номер...',
            setValue: setPhoneNumber,
            type: 'tel'
        }
    ]

    const saveChanges = async () => {
        console.log('save')
        const newUserInfo = {
            firstName,
            lastName,
            email,
            company,
            dateOfBirth,
            phoneNumber,
        }
        const newUser = {
            ...user,
            info: newUserInfo
        }
        try {
            await axiosHandler.put(`/users/${userId}.json`, newUser)    //Заменили user
            await getData(userId)   //Обновили данные состояния приложения
            setIsChange(false)
        } catch(e) {
            console.log('saveChanges(put new user)', e)
        }
    }

    return (
        isLoading
            ? <div className='edit-user-loader' >
                <Loader />
            </div>
            : <div className='edit-user' >
                <h1 className='text size-30 width-700' >{`Ваша базовая информация, ${user?.info?.firstName}`}</h1>
                <EditUserItem
                    label='Основная информация'
                    items={ mainItems }
                    setIsChange={ setIsChange }
                />
                <EditUserItem
                    label='Дополнительная информация'
                    items={ additionalItems }
                    setIsChange={ setIsChange }
                />
                <div className='edit-user-item'>
                    <hr className='demiliter' />
                    <h3 className='text size-22 width-700' >Статистика</h3>
                    <ul>
                        <li>
                            <p className='text' >{ `Количество проектов, над которыми вы сейчас работаете:` }</p>
                            <p className='text' >{ user?.projectsId?.length }</p>
                        </li>
                        <li>
                            <p className='text' >{ `Количество задач, над которыми вы сейчас работаете:` }</p>
                            <p className='text' >{ user?.tasksId?.length }</p>
                        </li>
                    </ul>
                </div>
                <ButtonForm
                    classType='success'
                    clickHandler={ saveChanges }
                    disabled={ isChange ? false : true }
                >
                    Сохранить изменения
                </ButtonForm>
            </div>
    )
}

export default EditUser