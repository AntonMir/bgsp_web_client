import React, { useState, useEffect, useRef } from 'react';
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// ANTD
import { Form, message } from 'antd'
// UI
import Title from 'UI/Title'
import Button from 'UI/Button'
// img
import blueArrow from 'assets/global/blue-arrow.svg'
// styles
import styled from 'styled-components'
import TextArea from 'antd/es/input/TextArea';
import ImgInput from 'UI/ImgInput';
import { RcFile, UploadFile } from 'antd/es/upload';
import { axiosApi } from 'axiosApi/axiosApi';


interface IForm {
  title: string
  text: string
  img: string | Blob | RcFile | UploadFile<any>
}

interface IEditPostForm {
  id: string | number
  title: string
  text: string
  closeForm: () => void
  reloadNews: () => void
}

const EditPostForm: React.FC<IEditPostForm> = ({closeForm, reloadNews, title, text, id}) => {


  // Данные для отправки
  const [form, setForm] = useState<IForm>({ title: '', text: '', img: '' })

  const colorTheme = useAppSelector((state) => state.colorTheme.color)

  /**
   * Отправка данных формы на сервер
   * и обработка ответа
   * */ 
  const submitForm = async () => {
    try {
      if(!form.title) return message.error('Добавьте Заголовок')
      if(!form.text) return message.error('Добавьте текст поста')
      if(!form.img) return message.error('Добавьте картинку')

      const response = await axiosApi.put('/api/news', 
        {
          title: form.title,
          text: form.text,
          id: id,
          img: form.img ? form.img : null      
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      console.log('response', response)
      
      reloadNews()
      closeForm()
      
    } catch(error) {
      return console.log(error)
    }
  }

  /**
   * Фиксируем изменение текста или заголовка
   */ 
  const changePostText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const onLoadFile = (file: string | Blob | RcFile) => {
    setForm({ ...form, 'img': file })
  }
 

  return (
    <Background >

      <Wrapper className={`form-${colorTheme}`}>

        <Title 
          text='Создание поста'
          contextOfUse='form'
        />

        <FormStyle>

          <ImgInput 
            onLoadFile={onLoadFile}
          />

          <FormText>
            <TextArea 
              placeholder='Заголовок'
              name="title" 
              onChange={changePostText}
              defaultValue={title}
            />

            <TextArea
              name='text'
              placeholder='Текст поста'
              onChange={changePostText}
              style={{minHeight: '125px'}}
              defaultValue={text}
            />  
          </FormText>

          {/* <FormBtn>
            { error && <Alert showIcon message={error} type="error" style={{maxHeight: 32}}/>}
          </FormBtn> */}

     

        </FormStyle>

        <Footer>
          <Button border onClick={submitForm}>Отправить</Button>
          <Button border onClick={closeForm}>Отмена</Button>
        </Footer>

      </Wrapper>
      
    </Background>
  );
};


const Background = styled.div`
  color: inherit;
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

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: calc(0.8vw + 10px);
  border-radius: 10px;
  margin-bottom: 30px;
`


const FormStyle = styled(Form)`
  display: flex;
  gap: 10px;
  background-color: inherit;
  color: inherit;
`

const FormText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  background-color: inherit;
  color: inherit;
`

const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

export default EditPostForm;