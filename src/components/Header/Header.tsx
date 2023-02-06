import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// components
import HeaderInfo from './Header.info'
import HeaderAuth from './Header.auth'

// styled
import styled from 'styled-components'


const Header: React.FC = () => {

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
            <HeaderAuth/>
            <HeaderInfo/>
        </Background>
    )
}

const Background = styled.div`
    /* position: sticky; */
    /* top: 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    box-shadow: 0 0 10px #000;
    z-index: 999;
    padding: 10px 20px;

    @media (max-width: 1500px) {
        /* height: 170px; */
    }
`

export default Header