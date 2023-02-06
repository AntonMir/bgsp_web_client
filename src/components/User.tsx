import React, { useEffect, useState} from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// axios
import { axiosApi } from 'axiosApi/axiosApi'
// interfaces
import { IUserInfo } from 'interfaces/IUser' 
// img
import userBlack from 'assets/global/userBlack.svg' 
import userWhite from 'assets/global/userWhite.svg' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { message } from 'antd'


const User: React.FC = () => {

    const [userData, setUserData] = useState<IUserInfo>()

    useEffect(() => {
        axiosApi.get(`${process.env.REACT_APP_SERVER_URL}/api/user/profile`)
        .then(response => {
            setUserData(response.data.user)
        })
        .catch(response => {
            message.error('Ошибка получения данных пользователя')
        })
    }, [])
    

    return (
        <LinkStyled to='user'>
            <InfoBlock
                imgWhite={userWhite}
                imgBlack={userBlack}
                text={userData?.name}
                imgSize='10'
            />
        </LinkStyled>
    )
}

const LinkStyled = styled(Link)`
    height: 100%;
    text-decoration: none;
`

export default User