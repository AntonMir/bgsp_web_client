import { 
    // createSlice, 
    createReducer 
} from '@reduxjs/toolkit'
import { login, logout, refresh } from 'store/auth/auth.actions'
import { message } from 'antd'
import initialState from './index'
// import { IRegistrationRequest, IRegistrationResponse } from 'interfaces/IAuth'


// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {},
//     extraReducers: builder => (
//         builder
//             .addCase(login.fulfilled, (state, { payload }) => {
//                 state.isAuthenticated = payload.isAuthenticated
//                 payload.message && popUpMessage.success(payload.message)
//             })
//             .addCase(login.rejected, (state) => {
//                 state.isAuthenticated = false
//             })
//             .addCase(logout.fulfilled, (state, { payload }) => {
//                 state.isAuthenticated = payload.isAuthenticated
//             })
//             .addCase(logout.rejected, (state) => {
//                 state.isAuthenticated = false
//             })
//             .addCase(refresh.fulfilled, (state, { payload }) => {
//                 state.isAuthenticated = payload.isAuthenticated
//             })
//             .addCase(refresh.rejected, (state) => {
//                 state.isAuthenticated = false
//             })
//     )
// })
const authReducer = createReducer(initialState, (builder) => (
        builder
            // LOGIN 
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isAuthenticated = payload.data.isAuthenticated
                state.role = payload.data.role
                payload.message && message.success(payload.message)
            })
            .addCase(login.rejected, (state) => {
                state.isAuthenticated = false
            })
            // LOGOUT
            .addCase(logout.fulfilled, (state, { payload }) => {
                state.isAuthenticated = payload.data.isAuthenticated || false
            })
            .addCase(logout.rejected, (state) => {
                state.isAuthenticated = false
            })
            // REFRESH
            .addCase(refresh.fulfilled, (state, { payload }) => {
                state.isAuthenticated = payload.data.isAuthenticated || false
                state.role = payload.data.role
            })
            .addCase(refresh.rejected, (state) => {
                state.isAuthenticated = false
            })
            // // REGISTRATION
            // .addCase(registration.fulfilled, (state, { payload }) => {
            //     message.success('Пользователь успешно зарегистрирован')
            // })
            // .addCase(registration.rejected, (state) => {
            //     console.log('ererer')
            // })
    )
)

// export const authActions = authReducer.actions
// export const authReducer = authReducer.reducer


export default authReducer
