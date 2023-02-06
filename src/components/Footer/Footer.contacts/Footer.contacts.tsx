import Address from 'components/Address'
import GetCall from 'components/GetCall'
import TelephoneNum from 'components/TelephoneNum'
import WorkTime from 'components/WorkTime'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const Contacts = (props: Props) => {
    return (
        <ContactsWrapper>
            <Title>КОНТАКТНАЯ ИНФОРМАЦИЯ</Title>
            <Content>
                <TelephoneNum />
                <Address />
                <WorkTime />
                <GetCall />
            </Content>
        </ContactsWrapper>
    )
}

const ContactsWrapper = styled.div`
    border: 1px red solid;
    height: 400px;
    flex: 1;
`

const Title = styled.p`
    font-size: calc(1vw + 20px);
    margin: 0 0 50px 0;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /* flex-wrap: wrap; */
    /* gap: 50px; */
    /* align-items: center; */

    > * {
        /* flex: 1; */
        /* background-color: #ca5555; */
    }
`

export default Contacts