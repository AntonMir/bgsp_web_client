import React from 'react'
// Redux
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
// import { store } from 'store/store'
// import { logout } from 'store/auth/auth.actions'
// components
import LogOutBtn from './LogOutBtn'
import LogInBtn from './LogInBtn'
import Navigation from './Navigation'
import Logo from './Logo'
// styled
import styled from 'styled-components'


const Header: React.FC = () => {

    // отслеживаем процесс изменения STATE
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    return (
        <HeaderWrapper>
            <Logo/>
            {isAuthenticated ? (
                <>
                    <Navigation />
                    <LogOutBtn />
                </>
            ) : (
                <>
                    <LogInBtn />
                </>
            )}
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1%;
    height: 60px;
    background-color: #000;
    box-shadow: 0 0 10px #000;
    z-index: 9999;

    @media (max-width: 440px) {
        /* height: 80px;
        padding: 0 5% 0 8%; */
    }
`

export default Header