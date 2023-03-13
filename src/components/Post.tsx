import React, { useState } from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// UI
import Text from 'UI/Text'
import Title from 'UI/Title'
import Spinner from 'UI/Spinner'
import Button from 'UI/Button'
// styled
import styled from 'styled-components'
// antd
// import { Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
// axios
import { axiosApi } from 'axiosApi/axiosApi'
import EditPostForm from 'components/EditPostForm'

interface IPost {
  img: string
  title: string
  text: string
  date: string
  id: number | string
  editing?: boolean
  reloadNews?: () => void
}

const Post: React.FC<IPost> = ({img, title, text, date, editing, id, reloadNews}) => {

  const [editingPostData, setEditingPostData] = useState<boolean>(false)

  const colorTheme = useAppSelector((state) => state.colorTheme.color)

  const currentDate = new Date(date).toLocaleDateString()
  const currentFullDate = new Date(date).toLocaleString()

  const deletePost = async () => {
    try {
      const response = await axiosApi(`/api/news?id=${id}`, {method: 'DELETE'})
      console.log(response.data)
      reloadNews && reloadNews()
    } catch(error) {
      console.log('Не получилось удалить')
    }
  }

  if(!editingPostData) {
    return (
      <PostStyled className={colorTheme}>
        <Img>
          {img ? <img src={img} alt='post.jpg'/> : <Spinner />}
        </Img>
        <Info>
          <Title style={{marginBottom: 0}} text={title}/>
          <Text text={text} style={{flex: 1}}/>
          <Text text={!editing ? currentDate : currentFullDate}/>
          {editing && 
            <Footer>
              <Button style={{height: '30px'}} contextOfUse='form' onClick={deletePost}><DeleteOutlined />Удалить</Button>
              <Button style={{height: '30px'}} contextOfUse='form' onClick={() => setEditingPostData(true)}><EditOutlined />Редактировать</Button>
            </Footer>
          }
        </Info>
      </PostStyled>
    )
  } else {
    return (
      <EditPostForm 
        id={id}
        title={title}
        text={text}
        closeForm={() => setEditingPostData(false)} 
        reloadNews={() => reloadNews && reloadNews()}      
      />
    )
  }
}

const PostStyled = styled.div`
  display: flex;
  gap: 30px;
  padding: calc(5px + 1vw);
  margin-bottom: 20px;
`

const Img = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`

const Info = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
`

const Footer = styled.div`
  display: flex;
  gap: 30px;
`

export default Post