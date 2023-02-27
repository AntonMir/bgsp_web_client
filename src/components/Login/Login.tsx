import React, { useState } from 'react'
// navigation
import { Link } from 'react-router-dom'
// interfaces
import { ILoginRequest } from 'interfaces/IAuth'
// Redux
import { store } from 'store/store'
import { login } from 'store/auth/auth.actions'
// UI
import Input from 'UI/Input'
import Title from 'UI/Title'
import Button from 'UI/Button'
import Text from 'UI/Text'
// ANTD
import { Form, Alert } from 'antd'
// styles
import styled from 'styled-components'


const Login: React.FC = () => {

    // Данные для отправки
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
            <Form >
                <Title text='Авторизация' contextOfUse='auth'/>

                <Input 
                    label='Почта'
                    name="email" 
                    type="text"
                    required={true}
                    onChange={changeUserData}
                    contextOfUse='auth'
                />

                <Input 
                    label='Пароль'
                    name="password" 
                    type="password"
                    required={true}
                    onChange={changeUserData}
                    contextOfUse='auth'
                />

                <FormBtn>
                    {error 
                        ? <Alert showIcon message={error} type="error" style={{maxHeight: 32}}/>
                        : <Button style={{border: '1px solid'}} contextOfUse='auth' border onClick={submitForm}>Войти</Button>
                    }
                </FormBtn>
                
                <LinkWrapper>
                    <Link type="link" to="../registration">
                        <Text contextOfUse='auth' underline text='Нет аккаунта? Зарегистрируйтесь!'/>
                    </Link>
                </LinkWrapper>
            </Form>
    )
}

// ширина и отцентровка кнопки
const FormBtn = styled(Form.Item)`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

// отцентровка текста ссылки
const LinkWrapper = styled.div`
    display: flex;
    justify-content: center; 
`

export default Login