import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IButton {
    style?: React.CSSProperties
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

const Button: React.FC<IButton> = ({ children, style, className, onClick }) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <Btn 
            style={style} 
            className={className} 
            onClick={onClick}
            colorTheme={colorTheme}
        >
            {children}
        </Btn>
    )
}

const Btn = styled.div<any>`
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    height: 100%;
    user-select: none;
    color: ${props => props.colorTheme === 'dark' ? '#fff' : '#000'};

    :hover {
        text-decoration: underline;
    }
`

export default Button