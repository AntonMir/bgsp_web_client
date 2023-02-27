import React, { useState } from 'react';
// navigation
import { Link } from 'react-router-dom'
// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks'
import { close, open } from 'store/techSuppModal/techSuppModal.actions'
// ANTD
import { Form, Alert,  Modal } from 'antd'
// UI
import Input from 'UI/Input'
import Title from 'UI/Title'
import Button from 'UI/Button'
import Text from 'UI/Text'
// styles
import styled from 'styled-components'
import TextArea from 'antd/es/input/TextArea';



interface ITechSuppForm {
    name: string
    telNumber: string
    question: string
}

const TechSuppForm: React.FC = () => {

    const dispatch = useAppDispatch()

    // Данные для отправки
    const [form, setForm] = useState<ITechSuppForm>({ name: '', telNumber: '', question: '' })

    // текст ошибки с сервера
    const [error, setError] = useState<string>('')

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const modalVisible = useAppSelector((state) => state.techSuppModal.visible)
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    const closeModal = () => {
        dispatch({type: close.type})
    }

    const handleOk = () => {
        closeModal()
    }

    const handleCancel = () => {
        closeModal()
    };

     /**
     * Отправка данных формы на сервер
     * и обработка ответа
     * */ 
     const submitForm = async () => {
        try {

            console.log(form)
            // if(form.email) form.email = form.email.toLowerCase()

            // const response = await store.dispatch(login(form))

            // const status = response.meta.requestStatus // статус ответа fulfilled - успех, rejected - ошибка
            // const message: string | undefined = response.payload as string

            // console.log('Login_response', response)

            // если ошибка, запишем ее в state и покажем
            // if(status === 'rejected' && message !== undefined) {
                // return setError(message) 
            // }

        } catch(error) {
            return console.log(error)
        }
    }

    /**
     * Убираем из state текст ошибки
     */ 
     const removeError = () => {
        setError('') 
    }
    
    /**
     * Фиксируем изменение данных юзера
     */ 
    const changeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
        removeError()
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    /**
     * Фиксируем изменение текста вопроса
     */ 
    const changeQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        removeError()
        setForm({ ...form, [event.target.name]: event.target.value })
    }
  


    return (
        <ModalStyled
            open={modalVisible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            className={`tech_supp-${colorTheme}`}
            footer={false}
        >
            <Form className={`tech_supp-${colorTheme}`}>
                <Title text='Опишите ваш вопрос' contextOfUse='tech_supp'/>

                <Input 
                    label='Имя'
                    name="name" 
                    type="text"
                    required={false}
                    onChange={changeUserData}
                    contextOfUse='tech_supp'
                />

                <Input 
                    label='Телефон'
                    name="telNumber" 
                    type="text"
                    required={true}
                    onChange={changeUserData}
                    contextOfUse='tech_supp'
                />

               <TextArea
                    name='question'
                    placeholder='Введите ваш вопрос'
                    onChange={changeQuestion}
                    style={{minHeight: '150px'}}
               />

                <FormBtn>
                    {error 
                        ? <Alert showIcon message={error} type="error" style={{maxHeight: 32}}/>
                        : <Button style={{border: '1px solid'}} contextOfUse='tech_supp' border onClick={submitForm}>Отправить</Button>
                    }
                </FormBtn>
            </Form>
        </ModalStyled>
    );
};

const ModalStyled = styled(Modal)`
    padding: 0;
    border-radius: 10px;
    color: inherit;
    .ant-modal-content {
        background-color: inherit;
        color: inherit;
    }

    .ant-modal-close {
        color: inherit;
    }

    .ant-input {
        background-color: inherit;
        color: inherit;
    }
`

// ширина и отцентровка кнопки
const FormBtn = styled(Form.Item)`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export default TechSuppForm;