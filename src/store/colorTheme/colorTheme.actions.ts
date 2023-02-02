import { createAction } from "@reduxjs/toolkit"

export const changeToDark = createAction<string>('changeColorTheme/toDark')
export const changeToLight = createAction<string>('changeColorTheme/toLight')
