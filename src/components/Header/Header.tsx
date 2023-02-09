import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// components
import HeaderInfo from './Header.info'
import HeaderAuth from './Header.auth'

// styled
import styled from 'styled-components'
import Navigation from './Navigation'


const Header: React.FC = () => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)
    
    return (
        <Background className={colorTheme}>
            <HeaderAuth/>
            <HeaderInfo/>
            <Navigation />
        </Background>
    )
}

const Background = styled.div`
    /* position: sticky; */
    /* top: 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px #000;
    z-index: 999;
    padding: 10px 2%;

    @media (max-width: 1500px) {
        /* height: 170px; */
    }
`

export default Header