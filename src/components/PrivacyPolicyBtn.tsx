// ТМ - ТОРГОВАЯ МАРКА 

import React, { useCallback } from 'react'
// Redux
import { useAppDispatch } from 'hooks/redux.hooks'
import { visible } from 'store/privacyPolicy/privacyPolicy.actions'
// UI
import Text from 'UI/Text'
// styled
import styled from 'styled-components'


const PrivacyPolicyBtn: React.FC = () => {

    const dispatch = useAppDispatch()

    // Открыть Политика конфиденциальности и Пользовательское соглашение
    const visiblePrivacyPolicy = useCallback(() => {
        dispatch({type: visible.type})
    }, [dispatch])

    return (
        <Text
            text={
                <Button onClick={visiblePrivacyPolicy}>
                    <p>Политика конфиденциальности</p>
                    <p>Пользовательское соглашение</p>
                </Button>
            }
        />
    )
}

const Button = styled.span`
    cursor: pointer;
    
    > p {
        margin: 0;
    }

    :hover {
        > p {
            text-decoration: underline;
        }
    }
    
`

export default PrivacyPolicyBtn