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
}

const CustomLink: React.FC<ILink> = ({ to, style, onClick, children }) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <LinkStyle 
            to={to} 
            style={style} 
            className={colorTheme} 
            onClick={onClick}
        >
            {children}
        </LinkStyle>
    )
}

const LinkStyle = styled(Link)`
    display: flex;
    gap: 5px;
    align-items: center;
    text-decoration: none;
    padding: 0 15px;
    cursor: pointer;
    font-size: calc(0.10vw + 12px);
    height: 100%;
    user-select: none;

    :hover {
        text-decoration: underline;
    }
`

export default CustomLink