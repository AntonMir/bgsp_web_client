import React from 'react'
import styled from 'styled-components'
// components
import Contacts from './Footer.contacts'
import Map from './Footer.map'

interface IProps {}

const Footer: React.FC<IProps> = (props) => {
    return (
        <Background>
            <FooterWrapper>
                <Contacts />
                <Map />
            </FooterWrapper>
        </Background>
    )
}

const Background = styled.div`
    background-color: #262626;
    color: #8A8A8A;
    padding: 110px 0;
`

const FooterWrapper = styled.div`
    display: flex;
    gap: 150px;
    justify-content: space-between;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export default Footer