import { createAction } from "@reduxjs/toolkit"

export const visible = createAction<string>('privacyPolicy/visible')
export const hidden = createAction<string>('privacyPolicy/hidden')
