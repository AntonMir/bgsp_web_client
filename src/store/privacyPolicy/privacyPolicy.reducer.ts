import { createReducer } from '@reduxjs/toolkit'
import { visible, hidden } from './privacyPolicy.actions'
import initialState from './index'


const privacyPolicyReducer = createReducer(initialState, (builder) => (
        builder
            .addCase(visible, (state) => {
                state.visible = true
            })
            .addCase(hidden, (state) => {
                state.visible = false
            })
    )
)

export default privacyPolicyReducer
