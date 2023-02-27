import { createReducer } from '@reduxjs/toolkit'
import { close, open } from 'store/techSuppModal/techSuppModal.actions'
import initialState from './index'


const techSuppModalReducer = createReducer(initialState, (builder) => (
        builder
            .addCase(open, (state) => {
                state.visible = true
            })
            .addCase(close, (state) => {
                state.visible = false
            })
    )
)

export default techSuppModalReducer
