import { createAsyncThunk } from "@reduxjs/toolkit"
// import { message } from "antd"
import { AxiosError } from "axios"
import { axiosAuthApi } from "axiosApi/axiosApi"
import { 
    ILogoutResponse, 
    ILogoutRequest,
    ILoginRequest, 
    ILoginResponse,
    IRefreshResponse,
    IRefreshRequest,
    IRegistrationResponse,
    IRegistrationRequest
} from "interfaces/IAuth"

export type RegistrationKnownError = {
    message: string;
    description: string;
    code: number | undefined;
    response: {
        data: {
            message: string,
            data: any
        }
    }
  };


export const login = createAsyncThunk<ILoginResponse, ILoginRequest>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        return await axiosAuthApi.post<ILoginResponse>('/api/auth/login', {...data})
        .then(response => {
            return response.data
        })
        .catch(error => {
            return rejectWithValue(error.response.data.message)
        })
    }
)

export const logout = createAsyncThunk<ILogoutResponse, ILogoutRequest>(
    'auth/logout',
    async ( data={}, { rejectWithValue }) => {
        try {
            const response = await axiosAuthApi.post<ILogoutResponse>('/api/auth/logout', {...data})
            return response.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.message)
        }
    }
)

// ОТПРАВКА ДАННЫХ ДЛЯ РЕГИСТРАЦИИ НОВОГО ПОЛЬЗОВАТЕЛЯ ЧЕРЕЗ RTK(createAsyncThunk)
export const registration = createAsyncThunk<IRegistrationResponse, IRegistrationRequest>(
    'auth/registration',
    async ( data, { rejectWithValue } ) => { 
        return await axiosAuthApi.post<IRegistrationResponse>('/api/auth/registration', { ...data })
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                const error: AxiosError<RegistrationKnownError> = err as any; // ПРОРАБОТАТЬ
                return rejectWithValue(error.response?.data.message) // отклонить с значением
            })
    }
)

export const refresh = createAsyncThunk<IRefreshResponse, IRefreshRequest>(
    'auth/refresh',
    async ( data={}, { rejectWithValue }) => {
        try {
            const response = await axiosAuthApi.post<IRefreshResponse>('/api/auth/refresh', {...data})
            return response.data
        } catch (err: any) {
            return rejectWithValue(err.response.message)
        }
    }
)

