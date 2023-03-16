import React from 'react'
// UI
import Link from 'UI/Link'
// ANTD
import { HomeOutlined, FileWordOutlined } from '@ant-design/icons'
import styled from 'styled-components'


const Navigation: React.FC = () => {

    return (
        <Wrapper>
            <Link to='/'>
                <HomeOutlined/>
                Главная
            </Link>
            <Link to='/'>
                <FileWordOutlined />
                Документы
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
`



export default Navigation