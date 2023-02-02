import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// components
import LogOutBtn from './LogOutBtn'
import LogInBtn from './LogInBtn'
import Navigation from './Navigation'
import Logo from './Logo'
import Address from './Address'
import WorkTime from './WorkTime'
import TelephoneNum from './TelephoneNum'
import ThemeSwitcher from './ThemeSwitcher'
import GetCall from './GetCall'
import User from './User'
// styled
import styled from 'styled-components'


const Header: React.FC = () => {

    // отслеживаем состояние Аутентификации пользователя
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    // меняем стили в зависимости от темы
    const backgroundStyle = colorTheme === 'dark' 
        ? {
            backgroundColor: '#000'
        } : {
            backgroundColor: '#fff'
        }

    
    return (
        <Background style={backgroundStyle}>
            <HeaderWrapper>
                <Logo/>
                <Address />
                <WorkTime />
                <TelephoneNum />
                <GetCall />
                {isAuthenticated ? (
                    <>
                        {/* <Navigation /> */}
                        <User />
                        <LogOutBtn />
                    </>
                ) : (
                    <>
                        <LogInBtn />
                    </>
                )}
            </HeaderWrapper>

            <ThemeSwitcher />
        </Background>
    )
}

const Background = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: #000;
    box-shadow: 0 0 10px #000;
    height: 100px;
    z-index: 999;
`

const HeaderWrapper = styled.header`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5%;

    @media (max-width: 440px) {
        /* height: 80px;
        padding: 0 5% 0 8%; */
    }
`

export default Header