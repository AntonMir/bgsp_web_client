import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// styled
import styled from 'styled-components'

interface ILink {
    to: string
    style?: object
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

const CustomLink: React.FC<ILink> = ({ to, style, className, onClick, children }) => {

    return (
        <LinkStyle to={to} style={style} className={className} onClick={onClick}>
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
    color: #ccc;
    cursor: pointer;
    transition: background-color 0.1s linear, color 0.1s linear;
    font-size: 16px;
    height: 100%;
    user-select: none;

    :hover {
        background-color: #1890ff;
        color: #fff;
    }

    :active {
        background-color: #10406d;
        color: #ccc;
    }
`

export default CustomLink