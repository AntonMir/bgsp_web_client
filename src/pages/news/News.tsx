import React, { useState, useEffect } from 'react'
// Components
import Post from 'components/Post'
// styled
import styled from 'styled-components'
// axios
import { axiosPublickApi } from 'axiosApi/axiosApi'
import Button from 'UI/Button'


interface IPost {
  id: number
  title: string
  text: string
  createdAt: string
  updatedAt: string
  img: string
}

const News: React.FC = () => {

    const defaultNewsLength = 5
    const [data, setData] = useState<IPost[]>()
    const [listSize, setListSize] = useState<number>(defaultNewsLength)

    // /**
    //  * Sorted news from date created or date updated
    //  * @param news 
    //  * @returns IPost[]
    //  */
    // function sortNewsFromDate(news:IPost[]) {
    //   let sortedNews:IPost[] = []
    //   sortedNews = news.sort((prewPost, nextPost) => {
    //     // const prewPostDate = Math.max(Date.parse(prewPost.createdAt), Date.parse(prewPost.updatedAt))
    //     // const nextPostDate = Math.max(Date.parse(nextPost.createdAt), Date.parse(nextPost.updatedAt))
    //     const prewPostDate = Date.parse(prewPost.createdAt)
    //     const nextPostDate = Date.parse(nextPost.createdAt)
    //     return prewPostDate - nextPostDate        
    //   })
    //   return sortedNews
    // }

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axiosPublickApi('/api/news')
          // setData(sortNewsFromDate(response.data))
          setData(response.data)
        } catch(error) {
          console.log('Не удалось получить список новостей')
        }
      }
      
      getData()
    }, [])

  
    return (
        <NewsWrapper>
          {
            data && data.length > 0 && data.map(post => {
              if(data.indexOf(post, 0) < listSize) {
                return (
                  <Post 
                    id={post.id}
                    title={post.title} 
                    date={post.createdAt}
                    text={post.text}
                    img={post.img}
                    key={post.id}
                    editing={false}
                  />
                )
              } 
              return null
            })
          }

          { 
            data && data.length > listSize 
              ? <Button onClick={() => setListSize(listSize + 5)}>Покзать больше</Button> 
              : data && data.length > defaultNewsLength && <Button onClick={() => setListSize(5)}>Скрыть</Button>
          }
        </NewsWrapper>
    )
}

const NewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 50px; 
    padding: 50px calc(5px + 1vw);
    margin: 0 auto;
    max-width: 1440px;
    /* max-height: 500px; */
    /* overflow-y: scroll; */
`


export default News