interface ColorThemeState {
    color: string | null | undefined
}

const initialState: ColorThemeState = { 
    color: localStorage.getItem('color_theme') || process.env.REACT_APP_COLOR_THEME 
}

export default initialState