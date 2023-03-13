import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IButton {
    style?: React.CSSProperties
    onClick?: () => void
    children?: React.ReactNode
    border?: boolean
    underline?: boolean
    contextOfUse?: string
}

const Button: React.FC<IButton> = ({ children, style, onClick, border, underline, contextOfUse }) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    // если нам задают контекст использования, задаем соответствующий цветовой класс иначе задаем стандартный
    const colorThemeClass = contextOfUse ? `${contextOfUse}-${colorTheme}` : colorTheme

    return (
        <Btn 
            style={style} 
            className={colorThemeClass} 
            onClick={onClick}
            border={border}
            underline={underline}
        >
            {children}
        </Btn>
    )
}

const Btn = styled.div<any>`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: calc(0.10vw + 12px);
    height: 100%;
    user-select: none;
    padding: 5px 15px 6.4px;
    border-radius: ${props => props.border ? '5px' : 0};

    :hover {
        text-decoration: ${props => props.underline ? 'underline' : 'none'};
        opacity: 0.6;
    }

    @media (max-width: 440px) {
      padding: 5px 5px;
    }
`

export default Button