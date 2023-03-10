import { combineReducers } from '@reduxjs/toolkit'
// import { authApi } from 'store/auth/auth.api'
import authReducer from 'store/auth/auth.reducer'
import colorThemeReducer from 'store/colorTheme/colorTheme.reducer'
import techSuppModalReducer from 'store/techSuppModal/techSuppModal.reducer'


export default combineReducers({
    // [authApi.reducerPath]: authApi.reducer,
    // user: userReducer,
    auth: authReducer,
    colorTheme: colorThemeReducer,
    techSuppModal: techSuppModalReducer,
})


