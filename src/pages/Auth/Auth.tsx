import React from 'react'
// navigation
import { Routes, Route, Navigate } from 'react-router-dom'
// components 
import Login from 'components/Login'
import Registration from 'components/Registration'
// UI
import Row from 'UI/Row'
import Card from 'UI/Card'
// antd

const Auth: React.FC = () => {

    return (
        <Row>
            <Card>
                <Routes>
                    <Route path="/login" element={<Login />} key="/login" />
                    <Route path="/registration" element={<Registration />} key="/registration" />
                    <Route path="/*" element={<Navigate replace to="/auth/login" />} />
                </Routes>
             </Card>
        </Row>
        
    )
}


export default Auth