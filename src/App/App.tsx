import React, { useEffect } from 'react';
// navigation
import { Routes, Route, Navigate } from 'react-router-dom'
// Redux
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { store } from 'store/store'
import { refresh } from 'store/auth/auth.actions'
// components
import Layout from 'Layout'
import Auth from 'pages/auth';
import News from 'pages/news';
import User from 'pages/user';
import Admin from 'pages/admin';
import PrivacyPolicy from 'pages/privacyPolicy';
import Cookies from 'components/Cookies'
import TechSuppForm from 'components/TechSuppForm'
// styled
import './App.css'


const App: React.FC = () => {

    // отслеживаем процесс изменения STATE
    const auth = useSelector((state: RootState) => state.auth)

    // если уходим со страницы на другую или перезагружаем ее, сразу пробуем получить новые токены
    // !только при перезагрузке
    useEffect(() => {
        // window.addEventListener('focus', () => {
        //     store.dispatch(refresh(''))
        // })
        store.dispatch(refresh(''))
    }, [])

    // Для неавторизованных
    const publicRoutes = (
      <>
        <Route path="auth/*" element={<Auth />}/>
      </>
    )
    
    // для авторизованных пользователей
    const commonUsersRouters = (
      <>
        <Route path="user" element={<User/>}/>
      </>
    )
    
    // для админа
    const adminRouters = (
      <>
        <Route path="user" element={<User/>}/>
        <Route path="admin" element={<Admin/>}/>
      </>
    )


    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<News />}/>
                    <Route path="privacy_policy" element={<PrivacyPolicy />}/>
                    {
                      auth.isAuthenticated 
                        // тут все страницы, доступные для авторизованного пользователя 
                        ? auth.role === "ADMIN" 
                          ? adminRouters 
                          : commonUsersRouters
                        : publicRoutes // для неавторизованных
                    }
                    <Route path="*" element={<Navigate replace to={`/`} />}/>
                </Route>
            </Routes>

            <Cookies />
            <TechSuppForm />
        </>
    )
}


export default App;


