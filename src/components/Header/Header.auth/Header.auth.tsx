import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// components
import User from 'components/User'
import LogOutBtn from 'components/LogOutBtn'
import LogInBtn from 'components/LogInBtn'
import ThemeSwitcher from 'components/ThemeSwitcher'
import ToAdminBtn from 'components/ToAdminBtn'
// styled
import styled from 'styled-components'


const Auth: React.FC = () => {

    // отслеживаем состояние Аутентификации пользователя
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
    const role = useAppSelector((state) => state.auth.role)
    
    return (
        <HeaderAuth>

            <ThemeSwitcher />

            <Section>
                {isAuthenticated ? (
                    <>
                        <User />
                        {role === 'ADMIN' && <ToAdminBtn/> }
                        <LogOutBtn />
                    </>
                ) : (
                    <>
                        <LogInBtn />
                    </>
                )}
            </Section>

        </HeaderAuth>
    )
}

const HeaderAuth = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;

    @media (max-width: 1500px) {
        max-width: 1140px;
    }

    @media (max-width: 768px) {
        max-width: 400px;
        margin-bottom: 20px;
    }
`

const Section = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1500px) {
    }
`

export default Auth