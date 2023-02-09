import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IButton {
    style?: React.CSSProperties
    onClick?: () => void
    children?: React.ReactNode
}

const Button: React.FC<IButton> = ({ children, style, onClick }) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <Btn 
            style={style} 
            className={colorTheme} 
            onClick={onClick}
        >
            {children}
        </Btn>
    )
}

const Btn = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    font-size: calc(0.10vw + 12px);
    height: 100%;
    user-select: none;

    :hover {
        text-decoration: underline;
    }
`

export default Button