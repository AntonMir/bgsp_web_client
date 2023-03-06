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



interface IForm {
    title: string
    text: string
    img: string
}

interface IAddNewPostForm {
  closeForm: () => void
}

const AddNewPostForm: React.FC<IAddNewPostForm> = ({closeForm}) => {

    const dispatch = useAppDispatch()

    // Данные для отправки
    const [form, setForm] = useState<IForm>({ title: '', text: '', img: '' })

    const colorTheme = useAppSelector((state) => state.colorTheme.color)

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
     * Фиксируем изменение данных поста
     */ 
    const changeNewPostData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    /**
     * Фиксируем изменение текста Поста
     */ 
    const changePostText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
  


    return (
      <Wrapper >

        <FormStyle className={`form-${colorTheme}`}>
            <Title 
              text='Добавление нового поста'
              contextOfUse='form'
            />

            <Input 
                label='Заголовок'
                name="title" 
                type="text"
                onChange={changeNewPostData}
                contextOfUse='form'
            />

            <TextArea
                name='text'
                placeholder='Текст поста'
                onChange={changePostText}
                style={{minHeight: '150px'}}
            />

            {/* <FormBtn>
              { error && <Alert showIcon message={error} type="error" style={{maxHeight: 32}}/>}
            </FormBtn> */}

            <Footer>
              <Button style={{border: '1px solid'}} border onClick={submitForm}>Отправить</Button>
              <Button style={{border: '1px solid'}} border onClick={closeForm}>Отмена</Button>
            </Footer>

        </FormStyle>
        
      </Wrapper>
    );
};


const Wrapper = styled.div`
    color: inherit;
    /* display: flex; */
    /* justify-content: center; */
    .ant-modal-content {
        background-color: inherit;
        color: inherit;
    }

    /* отключим крестик в левой верхенй части экрана
    от не воспринимает стили родителя, и не меняет цвет в соответствии с темой */
    .ant-input {
        background-color: inherit;
        color: inherit;
    }
`

const FormStyle = styled(Form)`
  max-width: 1000px;
  margin: 0 auto;
  padding: calc(1vw + 10px);
  border-radius: 10px;
  margin-bottom: 30px;
`

// ширина и отцентровка кнопки
const FormBtn = styled(Form.Item)`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

export default AddNewPostForm;