import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// UI
import Text from 'UI/Text'
import Title from 'UI/Title'
import Spinner from 'UI/Spinner'
// styled
import styled from 'styled-components'
// antd
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
// axios
import { axiosNonAuthApi } from 'axiosApi/axiosApi'

interface INews {
    img: string
    title: string
    text: string
    date: string
    id: number | string
    editing?: boolean
    reloadNews?: () => void
}

const Post: React.FC<INews> = ({img, title, text, date, editing, id, reloadNews}) => {

    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    const postDelete = async () => {
      try {
        const response = await axiosNonAuthApi(`/api/news/delete?id=${id}`, {method: 'DELETE'})
        console.log(response.data)
        reloadNews && reloadNews()
      } catch(error) {
        console.log('Не получилось удалить')
      }
    }
    
    return (
        <PostStyled className={colorTheme}>
            <Img>
                {img ? <img src={img} alt='post.jpg'/> : <Spinner />}
            </Img>
            <Info>
                <Title style={{marginBottom: 0}} text={title}/>
                <Text text={text} style={{flex: 1}} />
                <Text text={date}/>
                {editing && <Button onClick={postDelete} style={{width: '100%'}}><DeleteOutlined /> Удалить пост</Button>}
            </Info>
        </PostStyled>
    )
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

export default Post