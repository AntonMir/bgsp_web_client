import React from 'react'
// UI
import Link from 'UI/Link'
// ANTD
import { LoginOutlined } from '@ant-design/icons'


const LogInBtn: React.FC = () => {

    return (
        <Link to="auth" >
            <LoginOutlined/>
            Вход
        </Link>
    )
}



export default LogInBtn