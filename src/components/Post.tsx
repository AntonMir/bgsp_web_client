import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// UI
import Text from 'UI/Text'
import Title from 'UI/Title'
import Spinner from 'UI/Spinner'
// styled
import styled from 'styled-components'

interface INews {
    img?: string
    title?: string
    text?: string
    date?: string
}

const Post: React.FC<INews> = ({img, title, text, date}) => {

    const colorTheme = useAppSelector((state) => state.colorTheme.color)


    return (
        <PostStyled className={colorTheme}>
            <Img>
                {img ? <img src={img} alt='news.jpg'/> : <Spinner />}
            </Img>
            <Info>
                <Title style={{marginBottom: 0}} text={title}/>
                <Text text={text}/>
                <Text text={date}/>
            </Info>
        </PostStyled>
    )
}

const PostStyled = styled.div`
    display: flex;
    padding: 30px;
    margin-bottom: 20px;
`

const Img = styled.div`
    max-width: 30%;
    flex: 1;
    height: 100%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex: 1;
`

export default Post