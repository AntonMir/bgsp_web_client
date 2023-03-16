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
    min-height: calc(100vh - 720px);
    width: auto;
    box-shadow: inset 0 0 10px #000;
`

export default Background
