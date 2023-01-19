
export interface ILoginRequest {
    email: string | null
    password: string | null
}

export interface ILoginResponse {
    message: string
    data: {
        isAuthenticated: boolean
    }
}

export interface ILogoutRequest {}

export interface ILogoutResponse {
    data: {
        isAuthenticated: boolean
    }
}

export interface IRegistrationRequest {
    name: String
    email: string
    password: string
    confirmPassword: string
}

export interface IRegistrationResponse {
    message: string
    data: {
        isAuthenticated: boolean
    }
}

export interface IRefreshRequest {}

export interface IRefreshResponse {
    data: {
        isAuthenticated: boolean
    }
}