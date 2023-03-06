import React from 'react'
// redux
import { store } from 'store/store'
import { logout } from 'store/auth/auth.actions'
// UI
import CustomLink from 'UI/Link'
// ANTD
import { SettingOutlined } from '@ant-design/icons'


const ToAdminBtn: React.FC = () => {

    return (
        <CustomLink to='admin'>
            <SettingOutlined />
            Настройка
        </CustomLink>
    )
}



export default ToAdminBtn