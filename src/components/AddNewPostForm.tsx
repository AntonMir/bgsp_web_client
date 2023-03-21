import React, { useState } from 'react';
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// ANTD
import { Form, message } from 'antd'
// UI
import Title from 'UI/Title'
import Button from 'UI/Button'
import ImgInput from 'UI/ImgInput'
// styles
import styled from 'styled-components'
import TextArea from 'antd/es/input/TextArea';
// axios
import { axiosApi } from 'axiosApi/axiosApi'


interface IForm {
  title: string
  text: string
}

interface IAddNewPostForm {
  closeForm: () => void
  reloadNews: () => void
}

const AddNewPostForm: React.FC<IAddNewPostForm> = ({closeForm, reloadNews}) => {


  // Данные для отправки
  const [form, setForm] = useState<IForm>({ title: '', text: ''})
  const [uploadedImg, setSelectedFile] = useState<File>()


  const colorTheme = useAppSelector((state) => state.colorTheme.color)

  /**
   * Отправка данных формы на сервер
   * и обработка ответа
   * */ 
  const submitForm = async () => {
    try {
      if(!form.title) return message.error('Добавьте Заголовок')
      if(!form.text) return message.error('Добавьте текст поста')
      if(!uploadedImg) return message.error('Добавьте картинку')

      await axiosApi.post('/api/news', {
        ...form,
        img: uploadedImg
      },{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        reloadNews()
        closeForm()
      })
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

  const handleFileChange = (event: any) => {
    event.preventDefault()
    setSelectedFile(event.target.files[0])
  }

  return (
    <Background >
      <Wrapper className={`form-${colorTheme}`}>
        <Title text='Создание поста' contextOfUse='form'/>

          <FormStyle>

            <ImgInput 
              onChange={handleFileChange}
              uploadedImg={uploadedImg}
            />

            <FormText>
              <TextArea 
                placeholder='Заголовок'
                name="title" 
                onChange={changePostText}
              />

              <TextArea
                name='text'
                placeholder='Текст поста'
                onChange={changePostText}
                style={{minHeight: '125px'}}
              />  
            </FormText>

        </FormStyle>

        <Footer>
          <Button border onClick={submitForm}>Создать</Button>
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

export default AddNewPostForm;