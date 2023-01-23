import { Link } from 'react-router-dom'
import React from 'react'
// styled
import styled from 'styled-components'

interface IProps {
    style?: object
    className?: string
    icon?: React.ReactNode
    text?: string
    onClick?: () => void
}

// LINK OR BUTTON!!!!!

const Button: React.FC<IProps> = ({ style, className, icon, text, onClick }) => {

    return (
        <Link to='auth'  style={{height: '100%'}}>
            <Btn style={style} className={className} onClick={onClick}>
                <Icon>{icon}</Icon>
                <Text>{text}</Text>
            </Btn>
        </Link>
    )
}

const Btn = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 0 15px;
    background-color: #000;
    color: #ccc;
    border: none;
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

const Icon = styled.span``

const Text = styled.span``

export default Button