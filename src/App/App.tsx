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
import HomePage from 'pages/homePage';
import User from 'pages/user';
import PrivacyPolicy from 'pages/privacyPolicy';
// styled
import './App.css'


const App: React.FC = () => {

    // отслеживаем процесс изменения STATE
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)


    // если уходим со страницы на другую или перезагружаем ее, сразу пробуем получить новые токены
    useEffect(() => {
        window.addEventListener('focus', () => {
            store.dispatch(refresh(''))
        })
        store.dispatch(refresh(''))
    }, [])



    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path="privacy_policy" element={<PrivacyPolicy />}/>
                {
                    isAuthenticated ? (
                        // тут все страницы, доступные для авторизованного пользователя
                        <Route path="user" element={<User/>}/>
                    ) 
                    : (
                        // только страница авторизации 
                        <Route path="auth/*" element={<Auth />}/>
                    )
                }
                <Route path="*" element={<Navigate replace to={`/`} />}/>
            </Route>
        </Routes>
    )
}


export default App;


