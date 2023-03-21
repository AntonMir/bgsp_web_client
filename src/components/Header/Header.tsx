import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// components
import HeaderInfo from './header.info'
import HeaderAuth from './header.auth'

// styled
import styled from 'styled-components'
import HeaderNav from './header.nav'


const Header: React.FC = () => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)
    
    return (
        <Background className={colorTheme}>
            <HeaderAuth/>
            <HeaderInfo/>
            {/* <HeaderNav /> */}
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
    /* z-index: 9999999; */
    padding: 10px 2% 20px;

    @media (max-width: 1500px) {
        /* height: 170px; */
    }
`

export default Header