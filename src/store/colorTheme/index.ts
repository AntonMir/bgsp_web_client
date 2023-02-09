interface ColorThemeState {
    color: string | undefined
}

const initialState: ColorThemeState = { 
    color: localStorage.getItem('color_theme') || process.env.REACT_APP_COLOR_THEME 
}

export default initialState