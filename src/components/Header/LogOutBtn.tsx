import React from 'react'
// redux
import { store } from 'store/store'
import { logout } from 'store/auth/auth.actions'
// UI
import Button from 'UI/Button'
// ANTD
import { LogoutOutlined } from '@ant-design/icons'


const LogOutBtn: React.FC = () => {

    const logoutHandler = () => store.dispatch(logout(''))

    return (
        <Button onClick={logoutHandler}>
            <LogoutOutlined/>
            Выход
        </Button>
    )
}



export default LogOutBtn