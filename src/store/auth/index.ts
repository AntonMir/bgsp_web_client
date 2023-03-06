interface AuthState {
    isAuthenticated: boolean
    role: string | null
}

const initialState: AuthState = { 
    isAuthenticated: false,
    role: null
}

export default initialState