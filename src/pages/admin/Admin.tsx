import React, { useState, useEffect } from 'react'
// Components
import Post from 'components/Post'
import AddNewPostForm from 'components/AddNewPostForm'
// styled
import styled from 'styled-components'
// axios
import { axiosNonAuthApi } from 'axiosApi/axiosApi'
// UI
import Button from 'UI/Button'
// antd
import { PlusOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';


interface IPost {
  id: number
  title: string
  text: string
  createdAt: string
  updatedAt: string
  img: string
}

const Admin: React.FC = () => {

    const defaultNewsLength = 5
    const [data, setData] = useState<IPost[]>()
    const [listSize, setListSize] = useState<number>(defaultNewsLength)
    const [addNewPostVisible, setAddNewPostVisible] = useState<boolean>(false)


        /**
     * Sorted news from date created or date updated
     * @param news 
     * @returns IPost[]
     */
    function sortNewsFromDate(news:IPost[]) {
      let sortedNews:IPost[] = []
      sortedNews = news.sort((prewPost, nextPost) => {
        const prewPostDate = Math.max(Date.parse(prewPost.createdAt), Date.parse(prewPost.updatedAt))
        const nextPostDate = Math.max(Date.parse(nextPost.createdAt), Date.parse(nextPost.updatedAt))
        return nextPostDate - prewPostDate        
      })
      return sortedNews
    }

    const getData = async () => {
      try {
        const response = await axiosNonAuthApi('/api/news')
        setData(sortNewsFromDate(response.data))
      } catch(error) {
        console.log('Не удалось получить список новостей')
      }
    }

    useEffect(() => {
      getData()
    }, [])

    const hideNewPostForm = () => {
      setAddNewPostVisible(false)
    }

    const showNewPostForm = () => {
      setAddNewPostVisible(true)
    }
    
    return (
        <AdminWrapper>

          { 
            addNewPostVisible 
              ? <AddNewPostForm closeForm={hideNewPostForm} />
              : <Button style={{padding: '15px 0', marginBottom: '15px'}} onClick={showNewPostForm}><PlusOutlined /> Добавить пост</Button> 
          }

          {
            data && data.length > 0 && data.map(post => {
              if(data.indexOf(post, 0) < listSize) {
                return (
                  <Post 
                    id={post.id}
                    title={post.title} 
                    date={new Date(post.createdAt).toLocaleString()}
                    text={post.text}
                    img={process.env.REACT_APP_SERVER_URL + '/' + post.img}
                    key={post.id}
                    editing={true}
                    reloadNews={getData}
                  />
                )
              } 
              return null
            })
          }

          { 
            data && data.length > listSize 
              ? <Button style={{padding: '15px 0'}} onClick={() => setListSize(listSize + 5)}><ArrowDownOutlined /> Покзать больше</Button> 
              : data && data.length > defaultNewsLength && <Button style={{padding: '15px 0'}}  onClick={() => setListSize(5)}><ArrowUpOutlined /> Скрыть</Button>
          }
        </AdminWrapper>
    )
}

const AdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 50px; 
    padding: 50px calc(5px + 1vw);
    margin: 0 auto;
    max-width: 1440px;
    /* max-height: 500px; */
    /* overflow-y: scroll; */
`


export default Admin