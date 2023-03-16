import React, { useRef, Ref, useState } from 'react';
// ANTD
import { InboxOutlined } from '@ant-design/icons';
// UI
import Button from 'UI/Button'
// utils
import { shortedString, delelteImgUUID } from 'utils/shortString'
// axios
import { axiosPublickApi } from 'axiosApi/axiosApi';
// styled
import styled from 'styled-components';
import { message } from 'antd';


interface IImgInput {
  onChange: (event: any) => void
  uploadedImg: File | undefined
  img?: string
}

const ImgInput: React.FC<IImgInput> = ({onChange, uploadedImg, img}) => {

  const filePicker: Ref<any> = useRef(null)

  const handlePick = () => {
    filePicker.current.click()
  }

  const checkPickedImg = async (event: any) =>{
    await axiosPublickApi.post('/api/check/img', {
      img: event.target.files[0]
    },{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(resp => {
      console.log('resp', resp)
      if(resp.status < 400) {
        onChange(event)
      }
    })
    .catch(error => {
      console.error(error)
      message.error(error.response.data.message)
    })
  }

  return (
    <InputFileWrapper>

      <Button style={{height: '75%'}} onClick={handlePick}>
        {img ? <Img src={process.env.REACT_APP_SERVER_URL + '/' + img} alt='post.jpg'/> : <InboxOutlined />}
      </Button>

      <input 
        ref={filePicker} 
        className='hidden' 
        type="file" 
        onChange={checkPickedImg} 
        accept='image/*'
      />

      <p>
        {uploadedImg 
          ? shortedString(uploadedImg.name) 
          : img 
            ? shortedString(delelteImgUUID(img)) 
            :'нет файла'
        }
      </p>

    </InputFileWrapper>
  );
};

const InputFileWrapper = styled.div`
    min-width: 60px;
    max-width: 100px;
  svg {
    height: 30px;
    width: 100%;
    min-width: 60px;
    max-width: 100px;
  }

  p {
    text-align: center;
  }
`

const Img = styled.img`
  width: 100%;
`

export default ImgInput;