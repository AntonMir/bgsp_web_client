import React from 'react';
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// ANTD
import { Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { RcFile} from 'antd/es/upload';
// styled
import styled from 'styled-components';

const { Dragger } = Upload;


interface IImgInput {
  onLoadFile: (file: string | Blob | RcFile ) => void
}

const ImgInput: React.FC<IImgInput> = ({onLoadFile}) => {

  const colorTheme = useAppSelector((state) => state.colorTheme.color)

  const formColorTheme = 'form-' + colorTheme

  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
    listType: 'picture',
    accept: 'image/png, image/jpeg, image/webp, image/jpg',
    customRequest: ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess && onSuccess("ok")
      }, 0)
      onLoadFile(file)
    },

  }


  return (
    <DraggerStyled {...props} className={formColorTheme} >
      <p className="ant-upload-drag-icon"><InboxOutlined /></p>
    </DraggerStyled>
  );
};

const DraggerStyled = styled(Dragger)`
  width: 20%;

  .ant-upload-wrapper, .ant-upload-drag {
    height: calc(100% - 74px);
  }

  p {
    background-color: inherit;
    color: inherit;
    font-size: 14px;
    padding: 0 10px;
  }

`

export default ImgInput;