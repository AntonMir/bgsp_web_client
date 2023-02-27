import React, { useState, useCallback } from 'react'
// navigation
import { Link, useNavigate } from 'react-router-dom'
// Redux
import { registration } from 'store/auth/auth.actions'
import { store } from 'store/store'
// interfaces
import { IRegistrationRequest } from 'interfaces/IAuth'
// ANTD
import { Form, Alert } from 'antd'
// UI
import Input from 'UI/Input'
import Title from 'UI/Title'
import Button from 'UI/Button'
import Text from 'UI/Text'
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
            <Title text='Регистрация' contextOfUse='auth'/>

            <Input 
                label="Имя"
                name="name" 
                type="text"
                required={true}
                onChange={changeUserData}
                contextOfUse='auth'
            />
          
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

            {/* autoComplete="new-password" */}

            <Input 
                label="Повторите пароль"
                name="confirmPassword"
                type="password"
                required={true}
                onChange={changeUserData}
                contextOfUse='auth'
            />

            <FormBtn>
                {error 
                    ? <Alert className='' showIcon message={error} type="error" style={{maxHeight: 32}}/>
                    : <Button style={{border: '1px solid'}} contextOfUse='auth' border onClick={submitForm}>Регистрация</Button>
                }
            </FormBtn>          

            <LinkWrapper>
                <Link type="link" to="../login">    
                    <Text contextOfUse='auth' underline text='Есть аккаунт? Войдите!'/>
                </Link>
            </LinkWrapper>
        </Form>
    )
}

// ширина и отцентровка кнопки
const FormBtn = styled(Form.Item)`
    padding-top: 10px;
    display: flex;
    justify-content: center;
`

// отцентровка текста ссылки
const LinkWrapper = styled.div`
    display: flex;
    justify-content: center; 
`

export default Registration