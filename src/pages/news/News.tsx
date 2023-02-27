import React from 'react'
// Components
import Post from 'components/Post'
// styled
import styled from 'styled-components'


interface IProps {
}

const News: React.FC<IProps> = (props) => {

    
    return (
        <NewsWrapper>
            <Post 
                title='Amet velit deserunt asperiores'
                text='
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet velit deserunt asperiores perferendis, reiciendis fugit saepe sit voluptates, assumenda iure repudiandae ea quisquam cumque! Ducimus iure veritatis doloribus distinctio quam.
                '
                date='27.02.2023'
            />
            <Post 
                title='Lorem ipsum dolor sit amet'
                text='
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam assumenda laudantium ratione molestias! Est voluptate tenetur soluta beatae quisquam, molestiae magni assumenda, veniam, ab ex nisi vel incidunt sint?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam assumenda laudantium ratione molestias! Est voluptate tenetur soluta beatae quisquam, molestiae magni assumenda, veniam, ab ex nisi vel incidunt sint?
                '
                date='27.02.2023'
            />
        </NewsWrapper>
    )
}

const NewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 50px; 
    padding: 50px 0;
    margin: 0 auto;
    max-width: 1440px;
`


export default News