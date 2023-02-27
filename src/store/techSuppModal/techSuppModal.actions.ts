import { createAction } from "@reduxjs/toolkit"

export const open = createAction<string>('techSuppModal/open')
export const close = createAction<string>('techSuppModal/close')
