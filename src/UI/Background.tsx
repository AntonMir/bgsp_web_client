import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IBackground {
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Background: React.FC<IBackground> = ({ children, style}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <BackgroundStyled 
            style={style} 
            className={`background-${colorTheme}`} 
        >
            {children}
        </BackgroundStyled>
    )
}

const BackgroundStyled = styled.div`
    height: 100%;
    width: auto;
    z-index: 999;
    padding: 40px 20px;
`

export default Background