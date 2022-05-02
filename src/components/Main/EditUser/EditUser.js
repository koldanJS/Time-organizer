import React from 'react'
import { useSimpledStore } from '../../../functions/functions'
import Loader from '../../Loader/Loader'
import './EditUser.css'

const EditUser = () => {

    const { user, isLoading } = useSimpledStore()

    const getUserData = () => {
        return {
            firstName: user.info.firstName,
            lastName: user.info.firstName,
            company: user.info.company,
            dateOfBirth: user.info.dateOfBirth,
            email: user.info.email,
            phoneNumber: user.info.phoneNumber,
            projectsNumber: user.projectsId.length,
            tasksNumber: user.tasksId.length,
        }
    }

    const userData = isLoading ? {} : getUserData()
    // const name = (user.info.firstName || 'FirstName') + (user.info.lastName || '')
    // const company = user.info.company || 'Your Company?'

    return (
        isLoading
            ? <div className='edit-user-loader' >
                <Loader />
            </div>
            : <div className='edit-user' >
                <h1 className='text size-30 width-700'>{`Ваша базовая информация, ${userData.firstName}`}</h1>
                <hr className='demiliter' />
                <div>
                    <h3>Основная информация</h3>
                    <p>Имя</p>
                    <input
                        value={ userData.firstName }
                        placeholder='Ваше имя...'
                        onChange={ () => {} }
                    />
                    <p>Фамилия</p>
                    <input
                        value={ userData.lastName }
                        placeholder='Ваша фамилия...'
                        onChange={ () => {} }
                    />
                    <p>Рабочая почта</p>
                    <input
                        value={ userData.email }
                        placeholder='Ваш email...'
                        onChange={ () => {} }
                    />
                    <p>Компания</p>
                    <input
                        value={ userData.company }
                        placeholder='Ваше место работы...'
                        onChange={ () => {} }
                    />
                </div>
                <hr className='demiliter' />
                <div>
                    <h3>Дополнительная информация</h3>
                    <p>День рождения</p>
                    <input
                        value={ userData.firstName }
                        placeholder='Ваше имя...'
                        onChange={ () => {} }
                    />
                    <p>Номер телефона</p>
                    <input
                        value={ userData.lastName }
                        placeholder='Ваша фамилия...'
                        onChange={ () => {} }
                    />
                </div>
                <div>
                    <h3>Статистика</h3>
                    <p>{ `Количество проектов, над которыми вы сейчас работаете:` }</p>
                    <p>{ userData.projectsNumber }</p>
                    <p>{ `Количество задач, над которыми вы сейчас работаете:` }</p>
                    <p>{ userData.tasksNumber }</p>
                </div>
            </div>
    )
}

export default EditUser