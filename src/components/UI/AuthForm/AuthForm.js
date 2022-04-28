import React from 'react'
import './AuthForm.css'
import ButtonForm from '../../UI/ButtonForm/ButtonForm'

const AuthForm = ({ label, buttonText, placeholders, setEmail, setPassword, email, password, submitHandler }) => {



    return (
        <form className='auth-form' onSubmit={ submitHandler } >
            <h3 className='text' > { label } </h3>
            <hr className='demiliter' />
            <input
                className='text'
                value={ email }
                placeholder={ placeholders.email }
                onChange={ event => { setEmail(event.target.value) } }
            />
            <input
                className='text'
                value={ password }
                placeholder={ placeholders.password }
                type='password'
                onChange={ event => { setPassword(event.target.value) } }
            />
            <ButtonForm type='submit' classType='success sign' >
                <p className='text color-white' > { buttonText } </p>
            </ButtonForm>
        </form>
    )
}

export default AuthForm