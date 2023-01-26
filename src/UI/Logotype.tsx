import React from 'react'
// styled
import styled from 'styled-components'

interface ILogotype {
    style?: object
    className?: string
    onClick?: () => void
    logo?: string
    logoTitle?: string
    size?: number
}

const Logotype: React.FC<ILogotype> = ({ style, className, onClick, logo, logoTitle: logoText, size }) => {

    return (
        <Logo style={{...style, height: size ?? 40}} className={className} onClick={onClick}>
            <Image src={logo} alt='logo.svg' />
            <Image src={logoText} alt='logo.svg' />
        </Logo>
    )
}

const Logo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    /* padding: 0 15px; */
    /* color: #ccc; */
    cursor: pointer;
    /* transition: background-color 0.1s linear, color 0.1s linear; */
    /* font-size: 16px; */
    height: 50px;
    user-select: none;
`

const Image = styled.img`
    height: inherit;
`

export default Logotype