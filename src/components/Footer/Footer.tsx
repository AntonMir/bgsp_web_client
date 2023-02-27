import React from 'react'
import styled from 'styled-components'
// components
import Contacts from './Footer.contacts'
import Map from './Footer.map'
// redux
import { useAppSelector } from 'hooks/redux.hooks' 

interface IProps {}

const Footer: React.FC<IProps> = (props) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <Background className={colorTheme}>
            <FooterWrapper>
                <Contacts />
                <Map />
            </FooterWrapper>
        </Background>
    )
}

const Background = styled.div`
    padding: 50px 2%;
    /* box-shadow: 0 0 10px #000; */
`

const FooterWrapper = styled.div`
    display: flex;
    gap: calc(1vw + 10px);
    justify-content: space-between;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1500px) {
        max-width: 1140px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        max-width: 440px;
        gap: 50px;
    }
`

export default Footer