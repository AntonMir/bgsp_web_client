// ТМ - ТОРГОВАЯ МАРКА 

import React from 'react'
// UI
import Text from 'UI/InfoText'
// styled
import styled from 'styled-components'
// react-router-dom
import { Link } from 'react-router-dom'


const PrivacyPolicyBtn: React.FC = () => {

    return (
        <Text
            text={
                <Button to='privacy_policy'>
                    <p>Политика конфиденциальности</p>
                    <p>Пользовательское соглашение</p>
                </Button>
            }
        />
    )
}

const Button = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    
    > p {
        margin: 0;
    }

    :visited {
        color: inherit;
    }

    :hover {
        > p {
            text-decoration: underline;
        }
    }
    
`

export default PrivacyPolicyBtn