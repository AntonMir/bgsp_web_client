import React, { useCallback } from 'react'
// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks'
import { changeToDark, changeToLight } from 'store/colorTheme/colorTheme.actions'
// ANTD
import { Switch } from 'antd';
// style
import styled from 'styled-components'



const ThemeSwitcher: React.FC = () => {

    const dispatch = useAppDispatch()

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    
    // темная тема
    const setupDarkColorTheme = useCallback(() => {
        dispatch({type: changeToDark.type})
        localStorage.setItem('color_theme', 'dark')
    }, [dispatch])

    // светлая тема
    const setupLightColorTheme = useCallback(() => {
        dispatch({type: changeToLight.type})
        localStorage.setItem('color_theme', 'light')
    }, [dispatch])


    // изменяем состояние темы
    const changeColorTheme = () => {
        colorTheme === 'light' && setupDarkColorTheme()
        colorTheme === 'dark' && setupLightColorTheme()
    }


    return (
        <CustomSwitch 
            onClick={changeColorTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            defaultChecked={colorTheme === 'light'}
            style={{
                backgroundColor: colorTheme === 'dark' ? '#fff' : '#000',
            }}
        />
    )
}

const CustomSwitch = styled(Switch)`
    /* position: absolute; */
    /* top: 0; */
    /* right: 0; */
    margin: 5px;
    width: 80px;
    z-index: 9999999;

    .ant-switch-handle::before {
        background-color: #ccc;
    }

    .ant-switch-inner-checked {
    }
     
    .ant-switch-inner-unchecked {
        color: #000 !important;
    }
`

export default ThemeSwitcher