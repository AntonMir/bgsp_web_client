import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface ILink {
    to: string
    style?: React.CSSProperties
    onClick?: () => void
    children?: React.ReactNode
    contextOfUse?: string
    underline?: boolean
}

const CustomLink: React.FC<ILink> = ({ to, style, onClick, children, contextOfUse, underline }) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    // если нам задают контекст использования, задаем соответствующий цветовой класс иначе задаем стандартный
    const colorThemeClass = contextOfUse ? `${contextOfUse}-${colorTheme}` : colorTheme

    return (
        <LinkStyle 
            to={to} 
            style={style} 
            className={colorThemeClass} 
            onClick={onClick}
            underline={underline}
        >
            {children}
        </LinkStyle>
    )
}

const LinkStyle = styled(Link)<any>`
    display: flex;
    gap: 5px;
    align-items: center;
    text-decoration: none;
    padding: 5px 15px;
    cursor: pointer;
    font-size: calc(0.10vw + 12px);
    height: 100%;
    user-select: none;

    :hover {
        text-decoration: ${props => props.underline ? 'underline' : 'none'};
        opacity: 0.8;
    }
`

export default CustomLink