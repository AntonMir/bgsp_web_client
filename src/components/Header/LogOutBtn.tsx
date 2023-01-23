import React from 'react'
// redux
import { store } from 'store/store'
import { logout } from 'store/auth/auth.actions'
// ANTD
import { LogoutOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const LogOutBtn: React.FC = () => {

    const logoutHandler = () => {
        store.dispatch(logout(''))
    }

    return (
        <Button 
            className="headerBtn" 
            onClick={logoutHandler}
        >
            <LogoutOutlined style={{margin: '0 5px 0 0'}}/>
            Выход
        </Button>
    )
}


const Button = styled.div`
    
`

export default LogOutBtn