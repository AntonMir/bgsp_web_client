import React from 'react'
// Redux
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
// components
import LogOutBtn from './LogOutBtn'
import CustomButton from '../../UI/Button'
// ANTD
import { LogoutOutlined } from '@ant-design/icons'
// styled
import styled from 'styled-components'

type IProps = {}

const Header: React.FC<IProps> = () => {

    // отслеживаем процесс изменения STATE
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const handlerClick = () => {
        console.log('click')
    }

    if(isAuthenticated) return (
        <HeaderWrapper>
            <LogOutBtn />
        </HeaderWrapper>
    )

    return (
        <HeaderWrapper>
            {/* <Button className="headerBtn" >className="headerBtn" </Button> */}
            <CustomButton
                text='Кнопка'
                icon={<LogoutOutlined/>}
                onClick={handlerClick}
            />
            <CustomButton
                text='Кнопка'
                icon={<LogoutOutlined/>}
                // onClick={}
            />
            <CustomButton
                text='Кнопка'
                icon={<LogoutOutlined/>}
                // onClick={}
            />
            <CustomButton
                text='Кнопка'
                icon={<LogoutOutlined/>}
                // onClick={}
            />
            <LogOutBtn />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1%;
    height: 60px;
    background-color: #000;
    box-shadow: 0 0 10px #000 !important;
    z-index: 9999;
    @media (max-width: 440px) {
        height: 80px;
        padding: 0 5% 0 8%;
    }
`

const Button = styled.div`
    
`

export default Header