import React from 'react'
// axios
import { axiosApi } from 'axiosApi/axiosApi'


type Props = {}

const User = (props: Props) => {

    
    const getUserData = async () => {
        await axiosApi.get(`${process.env.REACT_APP_SERVER_URL}/api/user/profile`)
        .then(response => {
            console.log(response)
        })
    } 


    return (
        <>
            USER PAGE
            <button onClick={() => getUserData()}> getUserData </button>
        </>
    )
}

export default User