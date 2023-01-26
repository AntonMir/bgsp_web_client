import React from 'react'
// styled
import styled from 'styled-components'

interface IButton {
    style?: object
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

const Button: React.FC<IButton> = ({ children, style, className, onClick }) => {

    return (
        <Btn style={style} className={className} onClick={onClick}>
            {children}
        </Btn>
    )
}

const Btn = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
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

export default Button