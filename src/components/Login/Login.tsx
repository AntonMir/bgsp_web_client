import React, { useState } from 'react'
// navigation
import { Link, useNavigate } from 'react-router-dom'
// interfaces
import { ILoginRequest } from 'interfaces/IAuth'
// Redux
import { store } from 'store/store'
import { login } from 'store/auth/auth.actions'
// ANTD
import { Button, Form, Input, Alert } from 'antd'
// styles
import styled from 'styled-components'


const Login: React.FC = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState<ILoginRequest>({ email: '', password: '' })

    // текст ошибки с сервера
    const [error, setError] = useState<string>('')

    /**
     * Отправка данных формы на сервер
     * и обработка ответа
     * */ 
    const submitForm = async () => {
        try {
            if(form.email) form.email = form.email.toLowerCase()

            const response = await store.dispatch(login(form))

            const status = response.meta.requestStatus // статус ответа fulfilled - успех, rejected - ошибка
            const message: string | undefined = response.payload as string

            console.log('Login_response', response)

            // если ошибка, запишем ее в state и покажем
            if(status === 'rejected' && message !== undefined) {
                return setError(message) 
            }

        } catch(error) {
            return console.log(error)
        }
    }

     /**
     * Убираем из state текст ошибки
     * */ 
    const removeError = () => {
        setError('') 
    }
    
    /**
     * Фиксируем все изменения полей ввода в state
     * */ 
    const changeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
        removeError()
        setForm({ ...form, [event.target.name]: event.target.value })
    }
   
    
    return (
        <Form>
            <Title>Авторизация</Title>

            <FormInput 
                label="Email" 
                name="email" 
                rules={[{ required: true, message: 'Пожалуйста введите Email!' }]}
            >
                <Input type="text" name="email" onChange={changeUserData} />
            </FormInput>

            <FormInput 
                label="Пароль" 
                name="password" 
                rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
            >
                <Input.Password 
                    autoComplete="current-password"
                    type="password" 
                    name="password" 
                    onChange={changeUserData} 
                />
            </FormInput>

            <FormBtn>
                {error 
                    ? <Alert showIcon message={error} type="error" style={{maxHeight: 32}}/>
                    : <Button type="primary" onClick={submitForm}>Войти</Button>
                }
            </FormBtn>
            
            <LinkWrapper>
                <Link type="link" to="../registration">Нет аккаунта? Зарегистрируйтесь!</Link>
            </LinkWrapper>
        </Form>
    )
}

const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`

// фиксируем ширину поля ввода
const FormInput = styled(Form.Item)`
    .ant-form-item-row {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .ant-form-item-control {
        max-width: 80%;
    }
`

// ширина и отцентровка кнопки
const FormBtn = styled(Form.Item)`
    display: flex;
    justify-content: center;
`

// отцентровка текста ссылки
const LinkWrapper = styled.div`
    display: flex;
    justify-content: center; 
`

export default Login