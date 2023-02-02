import { createReducer } from '@reduxjs/toolkit'
import { changeToDark, changeToLight } from 'store/colorTheme/colorTheme.actions'
import initialState from './index'


const colorThemeReducer = createReducer(initialState, (builder) => (
        builder
            .addCase(changeToDark, (state) => {
                state.color = 'dark'
            })
            .addCase(changeToLight, (state) => {
                state.color = 'light'
            })
    )
)

export default colorThemeReducer
