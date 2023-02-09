import React from 'react'
// React-router-dom
import { Link } from 'react-router-dom'
// components
import LogoSpecprod from 'components/LogoSpecprod'
import Address from 'components/Address'
import WorkTime from 'components/WorkTime'
import TelephoneNum from 'components/TelephoneNum'
import GetCall from 'components/GetCall'
// styled
import styled from 'styled-components'


const Info: React.FC = () => {

    return (
        <HeaderInfo>

            <Section>
                <Address />
                <WorkTime />
            </Section>

            <Link to='/'>
                <LogoSpecprod/>
            </Link>

            <Section>
                <TelephoneNum />
                <GetCall />
            </Section>
                
        </HeaderInfo>
    )
}

const HeaderInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    padding-bottom: 20px;

    @media (max-width: 1500px) {
        max-width: 1140px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 440px;
    }
`

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 36%;

    &:nth-of-type(2n) {
        align-items: flex-end;
    }

    @media (max-width: 1500px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
    }


    @media (max-width: 768px) {
        display: none;
        /* flex-direction: column;
        align-items: center;
        width: auto;
        margin: 30px 0;

        &:nth-of-type(2n) {
            align-items: center;
        } */
    }
`

export default Info