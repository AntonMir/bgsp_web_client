/*
    при попытке забрать какой-то экшон, через такой хук, 
    нам сразу будут выдаваться варианты
*/

import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch  } from "store/store";

// Используйте во всем приложении вместо простых `useDispatch` и `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector