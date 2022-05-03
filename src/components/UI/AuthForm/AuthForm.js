import React, { useState } from 'react'
import ButtonForm from '../../UI/ButtonForm/ButtonForm'
import './AuthForm.css'

const AuthForm = ({ label, buttonText, placeholders, submitHandler, linkText, changeForm, forgotPasswordText, forgotPassword }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className='auth-form' onSubmit={ (e) => submitHandler(e, email, password) } >
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
            <div className='links' >
                <a className='text size-16' onClick={ changeForm } >{linkText}</a>
                {
                    forgotPasswordText
                        ? <a className='text size-16' onClick={ forgotPassword } >{forgotPasswordText}</a>
                        : null
                }
            </div>
        </form>
    )
}

export default AuthForm