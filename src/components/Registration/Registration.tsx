import React, { useState, useCallback } from 'react'
// navigation
import { Link, useNavigate } from 'react-router-dom'
// Redux
import { registration } from 'store/auth/auth.actions'
import { store } from 'store/store'
// interfaces
import { IRegistrationRequest } from 'interfaces/IAuth'
// ANTD
import { Button, Form, Input, Alert } from 'antd'
// styled
import styled from 'styled-components'


const Registration = () => {

    const navigate = useNavigate()

    // хук REDUX для отправки данных при регистрации
    // const [registration ,{ isLoading, isSuccess }] = useLazyRegistrationQuery()

    // данные для отправки на бэк
    const [form, setForm] = useState<IRegistrationRequest>({ 
        name: '', 
        email: '', 
        password: '', 
        confirmPassword: ''
    })

    // текст ошибки с сервера
    const [error, setError] = useState<string>('')
       
    /**
     * Отправка данных регистрационной формы на сервер
     * и обработка ответа
     * */ 
    const submitForm = useCallback( async () => {
        try {

            if(form.email) form.email = form.email.toLowerCase()
            
            const response = await store.dispatch(registration(form)) // отправка формы на сервер
            const status = response.meta.requestStatus // статус ответа fulfilled - успех, rejected - ошибка
            const message: string | undefined = response.payload as string
            
            // если ошибка, запишем ее в state и покажем
            if(status === 'rejected' && message !== undefined) {
                return setError(message) 
            }
            
            // в случае успеха переходим на страницу логина
            if(status === 'fulfilled' && message !== undefined) {
                return navigate('../login')
            }
        } catch(error) {
            return console.log(error)
        }
        
    }, [form, navigate])

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
        setForm({ ...form, [event.target.name]: event.target.value }) // меняем
    }
    
    return (
        <Form>
            <Title>Регистрация</Title>
          
            <FormInput
                label="Имя"
                name="name"
                rules={[{ required: true, message: 'Пожалуйста введите ваше Имя!' }]}
            >
                <Input type="text" name="name" onChange={changeUserData} />
            </FormInput>

            <FormInput
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Пожалуйста введите Email!' }]}
            >
                <Input autoComplete="email" type="text" name="email" onChange={changeUserData} />
            </FormInput>

            <FormInput
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
            >
                <Input.Password 
                    type="password" 
                    name="password" 
                    onChange={changeUserData}
                    autoComplete="new-password"
                />
            </FormInput>

            <FormInput
                label="Повторите пароль"
                name="confirmPassword"
                rules={[{ required: true, message: 'Пожалуйста введите пароль повторно!' }]}
            >
                <Input.Password 
                    autoComplete="new-password" 
                    type="password" 
                    name="confirmPassword" 
                    onChange={changeUserData} 
                />
            </FormInput>

            <FormBtn>
                {error 
                    ? <Alert showIcon message={error} type="error" style={{maxHeight: 32}}/>
                    : <Button type="primary" onClick={submitForm}>Регистрация</Button>
                }
            </FormBtn>          

            <LinkWrapper>
                <Link type="link" to="../login">Есть аккаунт? Войдите!</Link>
            </LinkWrapper>
        </Form>
    )
}

const Title = styled.h1`
    text-align: center;
    margin: 0 0 30px;
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

export default Registration