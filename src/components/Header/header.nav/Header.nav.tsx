import React from 'react'
// UI
import Link from 'UI/Link'
// ANTD
import { HomeOutlined, QuestionOutlined } from '@ant-design/icons'
import styled from 'styled-components'


const Navigation: React.FC = () => {

    return (
        <Wrapper>
            <Link to='/'>
                <HomeOutlined/>
                Главная
            </Link>
            <Link to='/'>
                <QuestionOutlined/>
                Раздел - 1
            </Link>
            <Link to='/'>
                <QuestionOutlined/>
                Раздел - 2
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
`



export default Navigation