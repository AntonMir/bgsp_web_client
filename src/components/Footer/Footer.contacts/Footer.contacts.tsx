import React from 'react'
// components
import Address from 'components/Address'
import Email from 'components/Email'
import TechSuppBtn from 'components/TechSuppBtn'
import TelephoneNum from 'components/TelephoneNum'
import TM from 'components/TM'
import WorkTime from 'components/WorkTime'
import PrivacyPolicyBtn from 'components/PrivacyPolicyBtn'
// UI
import Title from 'UI/Title'
// styled
import styled from 'styled-components'


type Props = {}

const Contacts = (props: Props) => {
    return (
        <ContactsWrapper>
            <Title 
                text="КОНТАКТНАЯ ИНФОРМАЦИЯ"
                align='left'
            />
            <Content>
                <TelephoneNum />
                <Email />
                <Address />
                <WorkTime />
                <TechSuppBtn style={{backgroundColor: 'rgba(0,146,168, 0.9)'}} />
                <TM />
                <PrivacyPolicyBtn />
            </Content>
        </ContactsWrapper>
    )
}

const ContactsWrapper = styled.div`
    min-height: 400px;
    flex: 1;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, auto));
    grid-auto-rows: 50px;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
`

export default Contacts